const kCode = Symbol('code'), messages = new Map();

function makeNightAPIError(Base: ErrorConstructor | TypeErrorConstructor | RangeErrorConstructor) {
  return class NightAPIError extends Base {
    constructor(key: string, ...args: any[]) {
      super(message(key, args));
      this[kCode] = key;
      if (Error.captureStackTrace) Error.captureStackTrace(this, NightAPIError);
    };
    get name() { return `${super.name} [${this[kCode]}]` };
    get code() { return this[kCode] };
  };
};

function message(key: string, args: any[]) {
  if (typeof key !== 'string') throw new Error('Error message key must be a string');
  const msg = messages.get(key);
  if (!msg) throw new Error(`An invalid error message key was used: ${key}.`);
  if (typeof msg === 'function') return msg(...args);
  if (args === undefined || args.length === 0) return msg;
  args.unshift(msg);
  return String(...args);
};

function reg(sym, val) { messages.set(sym, typeof val === 'function' ? val : String(val)) };

export default {
  reg: reg,
  Error: makeNightAPIError(Error),
  TypeError: makeNightAPIError(TypeError),
  RangeError: makeNightAPIError(RangeError),
};
