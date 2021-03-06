/**
 * Stack Overflow For Teams Read APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { string } from '../schema';
import { BaseController } from './baseController';

export class BadgesController extends BaseController {
  /**
   * @return Response from the API call
   */
  async getAllBadges(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET', '/badges');
    return req.call(requestOptions);
  }

  /**
   * @param badgeIds
   * @return Response from the API call
   */
  async getBadgesByIDs(
    badgeIds: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ badgeIds: [badgeIds, string()] });
    req.appendTemplatePath`/badges/${mapped.badgeIds}`;
    return req.call(requestOptions);
  }

  /**
   * @return Response from the API call
   */
  async getBadgesNames(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET', '/badges/name');
    return req.call(requestOptions);
  }

  /**
   * @return Response from the API call
   */
  async getBadgesRecentlyAwarded(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET', '/badges/recipients');
    return req.call(requestOptions);
  }

  /**
   * @param badgeIds
   * @return Response from the API call
   */
  async getRecipientsOfBadgesByIDs(
    badgeIds: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ badgeIds: [badgeIds, string()] });
    req.appendTemplatePath`/badges/${mapped.badgeIds}/recipients`;
    return req.call(requestOptions);
  }

  /**
   * @return Response from the API call
   */
  async getTagBasedBadges(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET', '/badges/tags');
    return req.call(requestOptions);
  }
}
