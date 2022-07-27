import Functions from '../../functions';
import { Endpoints } from '../constants';

class QRcode {
    constructor(private token: string) {
        this.functions = new Functions(this.token);
    };

    async generate(options = null) {
        if(!options) throw new Error('The "text" option is required');
        if(typeof options !== 'object') throw new TypeError('The options must be an object');
        if(!options.text) throw new Error('"text" option is missing');
        if(options?.size && isNaN(options.size)) throw new Error('The option "size" must be a Number');
        if(options?.colorDark && typeof options.colorDark !== 'string') throw new TypeError('The option "colorDark" must be an string');
        if(options?.colorLight && typeof options.colorLight !== 'string') throw new TypeError('The option "colorLight" must be an string');
        if(options?.autoColor && (options.autoColor !== true || options.autoColor !== false)) throw new TypeError('The option "autoColor" must be an boolean');
        if(options?.backgroundImage && typeof options.backgroundImage !== 'string') throw new TypeError('The option "backgroundImage" must be an string');
        if(options?.backgroundDimming && typeof options.backgroundDimming !== 'string') throw new TypeError('The option "backgroundDimming" must be an string');
        if(options?.logoImage && typeof options.logoImage !== 'string') throw new TypeError('The option "logoImage" must be an string');
        if(options?.logoCornerRadius && isNaN(options.logoCornerRadius)) throw new Error('"logoCornerRadius" must be a Number');

        return await this.functions.get(`${Endpoints.Images._}${Endpoints.Images.QRcode._}`, { body: options });
    };

    async read(image) {
        if(!image) throw new Error('The "image" option is missing');
        if(Buffer.isBuffer(image)) return await this.functions.get(`${Endpoints.Images._}${Endpoints.Images.QRcode._}${Endpoints.Images.QRcode.reader}`, { body: { image } });
        if(typeof image !== 'string') throw new TypeError('The options must be an string or a Buffer');
        return await this.functions.get(`${Endpoints.Images._}${Endpoints.Images.QRcode._}${Endpoints.Images.QRcode.reader}`, { body: { image } });
    }
};

interface QRcode {
    functions: Functions;
    generate(options?: QRcode_options): Promise<any>;
    read(image: Buffer | String): Promise<any>;
};

interface QRcode_options {
    text: string;
    size?: number;
    colorDark?: string;
    colorLight?: string;
    autoColor?: boolean;
    backgroundImage?: string;
    backgroundDimming?: string;
    logoImage?: string;
    logoCornerRadius?: number;
}

export default QRcode;