/* tslint:disable */
/* eslint-disable */
/**
 * Polar API
 *  Welcome to the **Polar API** for [polar.sh](https://polar.sh).  The Public API is currently a [work in progress](https://github.com/polarsource/polar/issues/834) and is in active development. 🚀  #### Authentication  Use a [Personal Access Token](https://polar.sh/settings) and send it in the `Authorization` header on the format `Bearer [YOUR_TOKEN]`.  #### Feedback  If you have any feedback or comments, reach out in the [Polar API-issue](https://github.com/polarsource/polar/issues/834), or reach out on the Polar Discord server.  We\'d love to see what you\'ve built with the API and to get your thoughts on how we can make the API better!  #### Connecting  The Polar API is online at `https://api.polar.sh`. 
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
  Platforms,
} from '../models/index';

export interface StreamApiUserOrgRepoStreamRequest {
    platform: Platforms;
    orgName: string;
    repoName: string;
}

export interface StreamApiUserOrgStreamRequest {
    platform: Platforms;
    orgName: string;
}

/**
 * 
 */
export class StreamApi extends runtime.BaseAPI {

    /**
     * User Org Repo Stream
     */
    async userOrgRepoStreamRaw(requestParameters: StreamApiUserOrgRepoStreamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.platform === null || requestParameters.platform === undefined) {
            throw new runtime.RequiredError('platform','Required parameter requestParameters.platform was null or undefined when calling userOrgRepoStream.');
        }

        if (requestParameters.orgName === null || requestParameters.orgName === undefined) {
            throw new runtime.RequiredError('orgName','Required parameter requestParameters.orgName was null or undefined when calling userOrgRepoStream.');
        }

        if (requestParameters.repoName === null || requestParameters.repoName === undefined) {
            throw new runtime.RequiredError('repoName','Required parameter requestParameters.repoName was null or undefined when calling userOrgRepoStream.');
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
            path: `/api/v1/{platform}/{org_name}/{repo_name}/stream`.replace(`{${"platform"}}`, encodeURIComponent(String(requestParameters.platform))).replace(`{${"org_name"}}`, encodeURIComponent(String(requestParameters.orgName))).replace(`{${"repo_name"}}`, encodeURIComponent(String(requestParameters.repoName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * User Org Repo Stream
     */
    async userOrgRepoStream(requestParameters: StreamApiUserOrgRepoStreamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.userOrgRepoStreamRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User Org Stream
     */
    async userOrgStreamRaw(requestParameters: StreamApiUserOrgStreamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.platform === null || requestParameters.platform === undefined) {
            throw new runtime.RequiredError('platform','Required parameter requestParameters.platform was null or undefined when calling userOrgStream.');
        }

        if (requestParameters.orgName === null || requestParameters.orgName === undefined) {
            throw new runtime.RequiredError('orgName','Required parameter requestParameters.orgName was null or undefined when calling userOrgStream.');
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
            path: `/api/v1/{platform}/{org_name}/stream`.replace(`{${"platform"}}`, encodeURIComponent(String(requestParameters.platform))).replace(`{${"org_name"}}`, encodeURIComponent(String(requestParameters.orgName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * User Org Stream
     */
    async userOrgStream(requestParameters: StreamApiUserOrgStreamRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.userOrgStreamRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * User Stream
     */
    async userStreamRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
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
            path: `/api/v1/user/stream`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * User Stream
     */
    async userStream(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.userStreamRaw(initOverrides);
        return await response.value();
    }

}
