/** Réponse standard de Night-API */
export interface NightResponse<T = unknown> {
  status: number;
  content: T;
}

export interface ClientOptions {
  /** URL de l'API (défaut https://api.night-api.com) */
  baseUrl?: string;
  /** Délai max d'une requête en ms (défaut 15000) */
  timeout?: number;
  /** Nouvelles tentatives automatiques après un 429 (défaut 1) */
  retries?: number;
  /**
   * `true` : les erreurs (status >= 400 dans le JSON) rejettent la promesse avec une NightAPIError.
   * `false` (défaut, comportement v1) : la promesse est résolue avec { status, content }.
   */
  throwOnError?: boolean;
}

export class NightAPIError extends Error {
  constructor(public status: number, public content: unknown) {
    super(typeof content === 'string' ? content : `Night-API error ${status}`);
    this.name = 'NightAPIError';
  }
}

type Query = Record<string, string | number | boolean | (string | number)[] | undefined>;

export class Client {
  readonly baseUrl: string;
  private readonly timeout: number;
  private readonly retries: number;
  private readonly throwOnError: boolean;

  constructor(private readonly token: string, opts: ClientOptions = {}) {
    this.baseUrl = (opts.baseUrl ?? 'https://api.night-api.com').replace(/\/$/, '');
    this.timeout = opts.timeout ?? 15_000;
    this.retries = opts.retries ?? 1;
    this.throwOnError = opts.throwOnError ?? false;
  }

  private url(path: string, query?: Query) {
    const u = new URL(this.baseUrl + path);
    for (const [k, v] of Object.entries(query ?? {})) {
      if (v === undefined) continue;
      if (Array.isArray(v)) v.forEach((x) => u.searchParams.append(k, String(x)));
      else u.searchParams.set(k, String(v));
    }
    return u.toString();
  }

  async request<T = unknown>(method: 'GET' | 'POST', path: string, opts: { query?: Query; body?: unknown } = {}, attempt = 0): Promise<NightResponse<T>> {
    const res = await fetch(this.url(path, opts.query), {
      method,
      headers: {
        authorization: this.token,
        'user-agent': 'night-api-npm/2',
        ...(opts.body !== undefined ? { 'content-type': 'application/json' } : {}),
      },
      body: opts.body !== undefined ? JSON.stringify(opts.body) : undefined,
      signal: AbortSignal.timeout(this.timeout),
    });

    // Rate-limit : on attend le temps indiqué puis on réessaie
    if (res.status === 429 && attempt < this.retries) {
      const wait = Number(res.headers.get('retry-after') ?? 1);
      if (wait <= 5) {
        await new Promise((r) => setTimeout(r, wait * 1000));
        return this.request<T>(method, path, opts, attempt + 1);
      }
    }

    const data = (await res.json().catch(() => ({ status: res.status, content: res.statusText }))) as NightResponse<T>;
    if (!res.ok) throw new NightAPIError(data.status ?? res.status, data.content); // comportement v1 : rejet si HTTP >= 400
    if (this.throwOnError && data.status >= 400) throw new NightAPIError(data.status, data.content);
    return data;
  }

  get<T = unknown>(path: string, query?: Query) {
    return this.request<T>('GET', path, { query });
  }

  post<T = unknown>(path: string, body?: unknown) {
    return this.request<T>('POST', path, { body });
  }
}

export function toImageInput(image: Buffer | string): string {
  return typeof image === 'string' ? image : image.toString('base64');
}

export function assertId(id: unknown): number | undefined {
  if (id === undefined || id === null) return undefined;
  const n = Number(id);
  if (!Number.isInteger(n) || n < 0) throw new TypeError('The ID must be a positive integer');
  return n;
}
