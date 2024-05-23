/* tslint:disable */
/* eslint-disable */
/**
 * Polar API
 *  Welcome to the **Polar API** for [polar.sh](https://polar.sh).  This specification contains both the definitions of the Polar HTTP API and the Webhook API.  #### Authentication  Use a [Personal Access Token](https://polar.sh/settings) and send it in the `Authorization` header on the format `Bearer [YOUR_TOKEN]`.  #### Feedback  If you have any feedback or comments, reach out in the [Polar API-issue](https://github.com/polarsource/polar/issues/834), or reach out on the Polar Discord server.  We\'d love to see what you\'ve built with the API and to get your thoughts on how we can make the API better!  #### Connecting  The Polar API is online at `https://api.polar.sh`. 
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  HTTPValidationError,
  ListResourceProduct,
  NotPermitted,
  Product,
  ProductBenefitsUpdate,
  ProductCreate,
  ProductUpdate,
  ResourceNotFound,
  SubscriptionTierType,
} from '../models/index';

export interface ProductsApiCreateProductRequest {
    productCreate: ProductCreate;
}

export interface ProductsApiGetProductRequest {
    id: string;
}

export interface ProductsApiListProductsRequest {
    organizationId?: string;
    includeArchived?: boolean;
    isRecurring?: boolean;
    benefitId?: string;
    type?: SubscriptionTierType;
    page?: number;
    limit?: number;
}

export interface ProductsApiUpdateProductRequest {
    id: string;
    productUpdate: ProductUpdate;
}

export interface ProductsApiUpdateProductBenefitsRequest {
    id: string;
    productBenefitsUpdate: ProductBenefitsUpdate;
}

/**
 * 
 */
export class ProductsApi extends runtime.BaseAPI {

    /**
     * Create a product.
     * Create Product
     */
    async createProductRaw(requestParameters: ProductsApiCreateProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Product>> {
        if (requestParameters['productCreate'] == null) {
            throw new runtime.RequiredError(
                'productCreate',
                'Required parameter "productCreate" was null or undefined when calling createProduct().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/products/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['productCreate'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Create a product.
     * Create Product
     */
    async createProduct(requestParameters: ProductsApiCreateProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Product> {
        const response = await this.createProductRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a product by ID.
     * Get Product
     */
    async getProductRaw(requestParameters: ProductsApiGetProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Product>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getProduct().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/products/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get a product by ID.
     * Get Product
     */
    async getProduct(requestParameters: ProductsApiGetProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Product> {
        const response = await this.getProductRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List products.
     * List Products
     */
    async listProductsRaw(requestParameters: ProductsApiListProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListResourceProduct>> {
        const queryParameters: any = {};

        if (requestParameters['organizationId'] != null) {
            queryParameters['organization_id'] = requestParameters['organizationId'];
        }

        if (requestParameters['includeArchived'] != null) {
            queryParameters['include_archived'] = requestParameters['includeArchived'];
        }

        if (requestParameters['isRecurring'] != null) {
            queryParameters['is_recurring'] = requestParameters['isRecurring'];
        }

        if (requestParameters['benefitId'] != null) {
            queryParameters['benefit_id'] = requestParameters['benefitId'];
        }

        if (requestParameters['type'] != null) {
            queryParameters['type'] = requestParameters['type'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/products/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * List products.
     * List Products
     */
    async listProducts(requestParameters: ProductsApiListProductsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListResourceProduct> {
        const response = await this.listProductsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a product.
     * Update Product
     */
    async updateProductRaw(requestParameters: ProductsApiUpdateProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Product>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling updateProduct().'
            );
        }

        if (requestParameters['productUpdate'] == null) {
            throw new runtime.RequiredError(
                'productUpdate',
                'Required parameter "productUpdate" was null or undefined when calling updateProduct().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/products/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['productUpdate'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update a product.
     * Update Product
     */
    async updateProduct(requestParameters: ProductsApiUpdateProductRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Product> {
        const response = await this.updateProductRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update benefits granted by a product.
     * Update Product Benefits
     */
    async updateProductBenefitsRaw(requestParameters: ProductsApiUpdateProductBenefitsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Product>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling updateProductBenefits().'
            );
        }

        if (requestParameters['productBenefitsUpdate'] == null) {
            throw new runtime.RequiredError(
                'productBenefitsUpdate',
                'Required parameter "productBenefitsUpdate" was null or undefined when calling updateProductBenefits().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/products/{id}/benefits`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['productBenefitsUpdate'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update benefits granted by a product.
     * Update Product Benefits
     */
    async updateProductBenefits(requestParameters: ProductsApiUpdateProductBenefitsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Product> {
        const response = await this.updateProductBenefitsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
