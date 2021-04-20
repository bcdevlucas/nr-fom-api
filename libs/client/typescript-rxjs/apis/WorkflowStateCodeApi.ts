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
import { WorkflowStateCodeDto } from '../models';

export interface WorkflowStateCodeControllerFindOneRequest {
  id: string;
}

/**
 * no description
 */
export class WorkflowStateCodeApi extends BaseAPI {
  /**
   */
  workflowStateCodeControllerFindAll(): Observable<Array<WorkflowStateCodeDto>>;
  workflowStateCodeControllerFindAll(
    opts?: OperationOpts
  ): Observable<RawAjaxResponse<Array<WorkflowStateCodeDto>>>;
  workflowStateCodeControllerFindAll(
    opts?: OperationOpts
  ): Observable<
    Array<WorkflowStateCodeDto> | RawAjaxResponse<Array<WorkflowStateCodeDto>>
  > {
    return this.request<Array<WorkflowStateCodeDto>>(
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
  }: WorkflowStateCodeControllerFindOneRequest): Observable<WorkflowStateCodeDto>;
  workflowStateCodeControllerFindOne(
    { id }: WorkflowStateCodeControllerFindOneRequest,
    opts?: OperationOpts
  ): Observable<RawAjaxResponse<WorkflowStateCodeDto>>;
  workflowStateCodeControllerFindOne(
    { id }: WorkflowStateCodeControllerFindOneRequest,
    opts?: OperationOpts
  ): Observable<WorkflowStateCodeDto | RawAjaxResponse<WorkflowStateCodeDto>> {
    throwIfNullOrUndefined(id, 'id', 'workflowStateCodeControllerFindOne');

    return this.request<WorkflowStateCodeDto>(
      {
        url: '/api/workflow-state-code/{id}'.replace('{id}', encodeURI(id)),
        method: 'GET',
      },
      opts ? opts.responseOpts : undefined
    );
  }
}
