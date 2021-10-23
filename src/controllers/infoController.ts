/**
 * Stack Overflow For Teams Read APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { BaseController } from './baseController';

export class InfoController extends BaseController {
  /**
   * Get information about the entire Stack Overflow for Teams site.
   *
   * @return Response from the API call
   */
  async getInfo(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET', '/info');
    return req.call(requestOptions);
  }
}
