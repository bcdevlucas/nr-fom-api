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
  HttpHeaders,
  throwIfNullOrUndefined,
  encodeURI,
  OperationOpts,
  RawAjaxResponse,
} from '../runtime';
import { CreateFspDistrictXrefDto, UpdateFspDistrictXrefDto } from '../models';

export interface FspDistrictXrefControllerCreateRequest {
  createFspDistrictXrefDto: CreateFspDistrictXrefDto;
}

export interface FspDistrictXrefControllerFindOneRequest {
  id: number;
}

export interface FspDistrictXrefControllerRemoveRequest {
  id: number;
}

export interface FspDistrictXrefControllerUpdateRequest {
  id: number;
  updateFspDistrictXrefDto: UpdateFspDistrictXrefDto;
}

/**
 * no description
 */
export class FspDistrictXrefApi extends BaseAPI {
  /**
   */
  fspDistrictXrefControllerCreate({
    createFspDistrictXrefDto,
  }: FspDistrictXrefControllerCreateRequest): Observable<void>;
  fspDistrictXrefControllerCreate(
    { createFspDistrictXrefDto }: FspDistrictXrefControllerCreateRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>>;
  fspDistrictXrefControllerCreate(
    { createFspDistrictXrefDto }: FspDistrictXrefControllerCreateRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>> {
    throwIfNullOrUndefined(
      createFspDistrictXrefDto,
      'createFspDistrictXrefDto',
      'fspDistrictXrefControllerCreate'
    );

    const headers: HttpHeaders = {
      'Content-Type': 'application/json',
    };

    return this.request<void>(
      {
        url: '/api/fsp-district-xref',
        method: 'POST',
        headers,
        body: createFspDistrictXrefDto,
      },
      opts?.responseOpts
    );
  }

  /**
   */
  fspDistrictXrefControllerFindOne({
    id,
  }: FspDistrictXrefControllerFindOneRequest): Observable<void>;
  fspDistrictXrefControllerFindOne(
    { id }: FspDistrictXrefControllerFindOneRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>>;
  fspDistrictXrefControllerFindOne(
    { id }: FspDistrictXrefControllerFindOneRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>> {
    throwIfNullOrUndefined(id, 'id', 'fspDistrictXrefControllerFindOne');

    return this.request<void>(
      {
        url: '/api/fsp-district-xref/{id}'.replace('{id}', encodeURI(id)),
        method: 'GET',
      },
      opts?.responseOpts
    );
  }

  /**
   */
  fspDistrictXrefControllerRemove({
    id,
  }: FspDistrictXrefControllerRemoveRequest): Observable<void>;
  fspDistrictXrefControllerRemove(
    { id }: FspDistrictXrefControllerRemoveRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>>;
  fspDistrictXrefControllerRemove(
    { id }: FspDistrictXrefControllerRemoveRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>> {
    throwIfNullOrUndefined(id, 'id', 'fspDistrictXrefControllerRemove');

    return this.request<void>(
      {
        url: '/api/fsp-district-xref/{id}'.replace('{id}', encodeURI(id)),
        method: 'DELETE',
      },
      opts?.responseOpts
    );
  }

  /**
   */
  fspDistrictXrefControllerUpdate({
    id,
    updateFspDistrictXrefDto,
  }: FspDistrictXrefControllerUpdateRequest): Observable<void>;
  fspDistrictXrefControllerUpdate(
    { id, updateFspDistrictXrefDto }: FspDistrictXrefControllerUpdateRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>>;
  fspDistrictXrefControllerUpdate(
    { id, updateFspDistrictXrefDto }: FspDistrictXrefControllerUpdateRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>> {
    throwIfNullOrUndefined(id, 'id', 'fspDistrictXrefControllerUpdate');
    throwIfNullOrUndefined(
      updateFspDistrictXrefDto,
      'updateFspDistrictXrefDto',
      'fspDistrictXrefControllerUpdate'
    );

    const headers: HttpHeaders = {
      'Content-Type': 'application/json',
    };

    return this.request<void>(
      {
        url: '/api/fsp-district-xref/{id}'.replace('{id}', encodeURI(id)),
        method: 'PUT',
        headers,
        body: updateFspDistrictXrefDto,
      },
      opts?.responseOpts
    );
  }
}
