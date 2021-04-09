// tslint:disable
/**
 * FOM API
 * API for FOM backend
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import {
  BaseAPI,
  throwIfNullOrUndefined,
  encodeURI,
  OperationOpts,
  RawAjaxResponse,
} from '../runtime';

export interface WorkflowStateCodeControllerFindOneRequest {
  id: number;
}

/**
 * no description
 */
export class WorkflowStateCodeApi extends BaseAPI {
  /**
   */
  workflowStateCodeControllerFindAll(): Observable<void>;
  workflowStateCodeControllerFindAll(
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>>;
  workflowStateCodeControllerFindAll(
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>> {
    return this.request<void>(
      {
        url: '/api/workflow-state-code',
        method: 'GET',
      },
      opts ? opts.responseOpts : undefined
    );
  }

  /**
   */
  workflowStateCodeControllerFindOne({
    id,
  }: WorkflowStateCodeControllerFindOneRequest): Observable<void>;
  workflowStateCodeControllerFindOne(
    { id }: WorkflowStateCodeControllerFindOneRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>>;
  workflowStateCodeControllerFindOne(
    { id }: WorkflowStateCodeControllerFindOneRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>> {
    throwIfNullOrUndefined(id, 'id', 'workflowStateCodeControllerFindOne');

    return this.request<void>(
      {
        url: '/api/workflow-state-code/{id}'.replace('{id}', encodeURI(id)),
        method: 'GET',
      },
      opts ? opts.responseOpts : undefined
    );
  }
}
