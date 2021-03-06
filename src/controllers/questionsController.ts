/**
 * Stack Overflow For Teams Read APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { string } from '../schema';
import { BaseController } from './baseController';

export class QuestionsController extends BaseController {
  /**
   * @return Response from the API call
   */
  async getAllQuestions(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET', '/questions');
    return req.call(requestOptions);
  }

  /**
   * @param questionIds
   * @return Response from the API call
   */
  async getQuestionByIDs(
    questionIds: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ questionIds: [questionIds, string()] });
    req.appendTemplatePath`/questions/${mapped.questionIds}`;
    return req.call(requestOptions);
  }

  /**
   * @param questionIds
   * @return Response from the API call
   */
  async getAnswersToQuestionsByIDs(
    questionIds: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ questionIds: [questionIds, string()] });
    req.appendTemplatePath`/questions/${mapped.questionIds}/answers`;
    return req.call(requestOptions);
  }

  /**
   * @param questionId
   * @return Response from the API call
   */
  async renderAnswersToQuestionWithID(
    questionId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({ questionId: [questionId, string()] });
    req.appendTemplatePath`/questions/${mapped.questionId}/answers/render`;
    return req.call(requestOptions);
  }

  /**
   * @param questionIds
   * @return Response from the API call
   */
  async getCommentsToQuestionsByIDs(
    questionIds: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ questionIds: [questionIds, string()] });
    req.appendTemplatePath`/questions/${mapped.questionIds}/comments`;
    return req.call(requestOptions);
  }

  /**
   * @param questionIds
   * @return Response from the API call
   */
  async getLinkedQuestionsByQuestionIDs(
    questionIds: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ questionIds: [questionIds, string()] });
    req.appendTemplatePath`/questions/${mapped.questionIds}/linked`;
    return req.call(requestOptions);
  }

  /**
   * @param questionIds
   * @return Response from the API call
   */
  async getRelatedQuestionsByQuestionIDs(
    questionIds: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ questionIds: [questionIds, string()] });
    req.appendTemplatePath`/questions/${mapped.questionIds}/related`;
    return req.call(requestOptions);
  }

  /**
   * @param questionIds
   * @return Response from the API call
   */
  async getTimelinesByQuestionIDs(
    questionIds: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ questionIds: [questionIds, string()] });
    req.appendTemplatePath`/questions/${mapped.questionIds}/timeline`;
    return req.call(requestOptions);
  }

  /**
   * @return Response from the API call
   */
  async getFeaturedQuestions(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET', '/questions/featured');
    return req.call(requestOptions);
  }

  /**
   * @return Response from the API call
   */
  async getQuestionsWithNOAnswers(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET', '/questions/no-answers');
    return req.call(requestOptions);
  }

  /**
   * @return Response from the API call
   */
  async getUnansweredQuestions(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET', '/questions/unanswered');
    return req.call(requestOptions);
  }
}
