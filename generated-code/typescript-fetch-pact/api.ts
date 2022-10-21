/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * Product API
 * Pactflow Product API demo
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

import * as url from "url";
import crossfetch from 'cross-fetch';

import { Configuration } from "./configuration";

const BASE_PATH = "/".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = crossfetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 * @interface Product
 */
export interface Product {
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Product
     */
    version?: string;
    /**
     * 
     * @type {number}
     * @memberof Product
     */
    price: number;
}
/**
 * DefaultApi - fetch parameter creator
 * @export
 */
export const DefaultApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new product
         * @summary Create a product
         * @param {Product} body Create a new Product
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProduct(body: Product, options: any = {}): FetchArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createProduct.');
            }
            const localVarPath = `/products`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"Product" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns all products
         * @summary List all products
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllProducts(options: any = {}): FetchArgs {
            const localVarPath = `/products`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a single product
         * @summary Find product by ID
         * @param {string} id ID of product to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductByID(id: string, options: any = {}): FetchArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getProductByID.');
            }
            const localVarPath = `/product/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Creates a new product
         * @summary Create a product
         * @param {Product} body Create a new Product
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProduct(body: Product, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Product> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).createProduct(body, options);
            return (fetch: FetchAPI, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * Returns all products
         * @summary List all products
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllProducts(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<Product>> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).getAllProducts(options);
            return (fetch: FetchAPI, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * Returns a single product
         * @summary Find product by ID
         * @param {string} id ID of product to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductByID(id: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Product> {
            const localVarFetchArgs = DefaultApiFetchParamCreator(configuration).getProductByID(id, options);
            return (fetch: FetchAPI, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * Creates a new product
         * @summary Create a product
         * @param {Product} body Create a new Product
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProduct(body: Product, options?: any) {
            return DefaultApiFp(configuration).createProduct(body, options)(fetch, basePath);
        },
        /**
         * Returns all products
         * @summary List all products
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllProducts(options?: any) {
            return DefaultApiFp(configuration).getAllProducts(options)(fetch, basePath);
        },
        /**
         * Returns a single product
         * @summary Find product by ID
         * @param {string} id ID of product to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProductByID(id: string, options?: any) {
            return DefaultApiFp(configuration).getProductByID(id, options)(fetch, basePath);
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * Creates a new product
     * @summary Create a product
     * @param {Product} body Create a new Product
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public createProduct(body: Product, options?: any) {
        return DefaultApiFp(this.configuration).createProduct(body, options)(this.fetch, this.basePath);
    }

    /**
     * Returns all products
     * @summary List all products
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getAllProducts(options?: any) {
        return DefaultApiFp(this.configuration).getAllProducts(options)(this.fetch, this.basePath);
    }

    /**
     * Returns a single product
     * @summary Find product by ID
     * @param {string} id ID of product to get
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getProductByID(id: string, options?: any) {
        return DefaultApiFp(this.configuration).getProductByID(id, options)(this.fetch, this.basePath);
    }

}
