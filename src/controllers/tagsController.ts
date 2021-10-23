/**
 * Stack Overflow For Teams Read APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { number, string } from '../schema';
import { BaseController } from './baseController';

export class TagsController extends BaseController {
  /**
   * @param pagesize
   * @param filter   Enable this filter to return just the total number of items.
   * @return Response from the API call
   */
  async getAllTags(
    pagesize: number,
    filter: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET', '/tags');
    const mapped = req.prepareArgs({
      pagesize: [pagesize, number()],
      filter: [filter, string()],
    });
    req.query('pagesize', mapped.pagesize);
    req.query('filter', mapped.filter);
    return req.call(requestOptions);
  }

  /**
   * @param tagsList
   * @return Response from the API call
   */
  async getTagsInfos(
    tagsList: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ tagsList: [tagsList, string()] });
    req.appendTemplatePath`/tags/${mapped.tagsList}/info`;
    return req.call(requestOptions);
  }

  /**
   * @return Response from the API call
   */
  async getModeratorOnlyTags(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET', '/tags/moderator-only');
    return req.call(requestOptions);
  }

  /**
   * @return Response from the API call
   */
  async getRequiredTags(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET', '/tags/required');
    return req.call(requestOptions);
  }

  /**
   * @return Response from the API call
   */
  async getTagSynonyms(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET', '/tags/synonyms');
    return req.call(requestOptions);
  }

  /**
   * @param tagsList
   * @return Response from the API call
   */
  async getFAQsByTags(
    tagsList: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ tagsList: [tagsList, string()] });
    req.appendTemplatePath`/tags/${mapped.tagsList}/faq`;
    return req.call(requestOptions);
  }

  /**
   * @param tagsList
   * @return Response from the API call
   */
  async getRelatedTagsForTags(
    tagsList: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ tagsList: [tagsList, string()] });
    req.appendTemplatePath`/tags/${mapped.tagsList}/related`;
    return req.call(requestOptions);
  }

  /**
   * @param tagsList
   * @return Response from the API call
   */
  async getSynonymsForTags(
    tagsList: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ tagsList: [tagsList, string()] });
    req.appendTemplatePath`/tags/${mapped.tagsList}/synonyms`;
    return req.call(requestOptions);
  }

  /**
   * @param tag
   * @param period
   * @return Response from the API call
   */
  async getTopAnswerersForTagsInPeriod(
    tag: string,
    period: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      tag: [tag, string()],
      period: [period, string()],
    });
    req.appendTemplatePath`/tags/${mapped.tag}/top-answerers/${mapped.period}`;
    return req.call(requestOptions);
  }

  /**
   * @param tagsList
   * @return Response from the API call
   */
  async getTagWikis(
    tagsList: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ tagsList: [tagsList, string()] });
    req.appendTemplatePath`/tags/${mapped.tagsList}/wikis`;
    return req.call(requestOptions);
  }
}
