/**
 * Stack Overflow For Teams Read APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { BaseController } from './baseController';

export class PrivilegesController extends BaseController {
  /**
   * @return Response from the API call
   */
  async getAllAvailablePrivileges(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET', '/privileges');
    return req.call(requestOptions);
  }
}
