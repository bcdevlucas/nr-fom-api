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
import { AttachmentTypeCodeDto } from '../models';

export interface AttachmentTypeCodeControllerFindOneRequest {
  id: string;
}

/**
 * no description
 */
export class AttachmentTypeCodeApi extends BaseAPI {
  /**
   */
  attachmentTypeCodeControllerFindAll(): Observable<
    Array<AttachmentTypeCodeDto>
  >;
  attachmentTypeCodeControllerFindAll(
    opts?: OperationOpts
  ): Observable<RawAjaxResponse<Array<AttachmentTypeCodeDto>>>;
  attachmentTypeCodeControllerFindAll(
    opts?: OperationOpts
  ): Observable<
    Array<AttachmentTypeCodeDto> | RawAjaxResponse<Array<AttachmentTypeCodeDto>>
  > {
    return this.request<Array<AttachmentTypeCodeDto>>(
      {
        url: '/api/attachment-type-code',
        method: 'GET',
      },
      opts ? opts.responseOpts : undefined
    );
  }

  /**
   */
  attachmentTypeCodeControllerFindOne({
    id,
  }: AttachmentTypeCodeControllerFindOneRequest): Observable<AttachmentTypeCodeDto>;
  attachmentTypeCodeControllerFindOne(
    { id }: AttachmentTypeCodeControllerFindOneRequest,
    opts?: OperationOpts
  ): Observable<RawAjaxResponse<AttachmentTypeCodeDto>>;
  attachmentTypeCodeControllerFindOne(
    { id }: AttachmentTypeCodeControllerFindOneRequest,
    opts?: OperationOpts
  ): Observable<
    AttachmentTypeCodeDto | RawAjaxResponse<AttachmentTypeCodeDto>
  > {
    throwIfNullOrUndefined(id, 'id', 'attachmentTypeCodeControllerFindOne');

    return this.request<AttachmentTypeCodeDto>(
      {
        url: '/api/attachment-type-code/{id}'.replace('{id}', encodeURI(id)),
        method: 'GET',
      },
      opts ? opts.responseOpts : undefined
    );
  }
}
