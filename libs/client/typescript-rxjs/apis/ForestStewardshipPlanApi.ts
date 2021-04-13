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
import {
  ForestStewardshipPlanDto,
  UpdateForestStewardshipPlanDto,
} from '../models';

export interface ForestStewardshipPlanControllerCreateRequest {
  forestStewardshipPlanDto: ForestStewardshipPlanDto;
}

export interface ForestStewardshipPlanControllerFindOneRequest {
  id: number;
}

export interface ForestStewardshipPlanControllerRemoveRequest {
  id: number;
}

export interface ForestStewardshipPlanControllerUpdateRequest {
  id: number;
  updateForestStewardshipPlanDto: UpdateForestStewardshipPlanDto;
}

/**
 * no description
 */
export class ForestStewardshipPlanApi extends BaseAPI {
  /**
   */
  forestStewardshipPlanControllerCreate({
    forestStewardshipPlanDto,
  }: ForestStewardshipPlanControllerCreateRequest): Observable<void>;
  forestStewardshipPlanControllerCreate(
    { forestStewardshipPlanDto }: ForestStewardshipPlanControllerCreateRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>>;
  forestStewardshipPlanControllerCreate(
    { forestStewardshipPlanDto }: ForestStewardshipPlanControllerCreateRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>> {
    throwIfNullOrUndefined(
      forestStewardshipPlanDto,
      'forestStewardshipPlanDto',
      'forestStewardshipPlanControllerCreate'
    );

    const headers: HttpHeaders = {
      'Content-Type': 'application/json',
    };

    return this.request<void>(
      {
        url: '/api/forest-stewardship-plan',
        method: 'POST',
        headers,
        body: forestStewardshipPlanDto,
      },
      opts ? opts.responseOpts : undefined
    );
  }

  /**
   */
  forestStewardshipPlanControllerFindOne({
    id,
  }: ForestStewardshipPlanControllerFindOneRequest): Observable<void>;
  forestStewardshipPlanControllerFindOne(
    { id }: ForestStewardshipPlanControllerFindOneRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>>;
  forestStewardshipPlanControllerFindOne(
    { id }: ForestStewardshipPlanControllerFindOneRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>> {
    throwIfNullOrUndefined(id, 'id', 'forestStewardshipPlanControllerFindOne');

    return this.request<void>(
      {
        url: '/api/forest-stewardship-plan/{id}'.replace('{id}', encodeURI(id)),
        method: 'GET',
      },
      opts ? opts.responseOpts : undefined
    );
  }

  /**
   */
  forestStewardshipPlanControllerRemove({
    id,
  }: ForestStewardshipPlanControllerRemoveRequest): Observable<void>;
  forestStewardshipPlanControllerRemove(
    { id }: ForestStewardshipPlanControllerRemoveRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>>;
  forestStewardshipPlanControllerRemove(
    { id }: ForestStewardshipPlanControllerRemoveRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>> {
    throwIfNullOrUndefined(id, 'id', 'forestStewardshipPlanControllerRemove');

    return this.request<void>(
      {
        url: '/api/forest-stewardship-plan/{id}'.replace('{id}', encodeURI(id)),
        method: 'DELETE',
      },
      opts ? opts.responseOpts : undefined
    );
  }

  /**
   */
  forestStewardshipPlanControllerUpdate({
    id,
    updateForestStewardshipPlanDto,
  }: ForestStewardshipPlanControllerUpdateRequest): Observable<void>;
  forestStewardshipPlanControllerUpdate(
    {
      id,
      updateForestStewardshipPlanDto,
    }: ForestStewardshipPlanControllerUpdateRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>>;
  forestStewardshipPlanControllerUpdate(
    {
      id,
      updateForestStewardshipPlanDto,
    }: ForestStewardshipPlanControllerUpdateRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>> {
    throwIfNullOrUndefined(id, 'id', 'forestStewardshipPlanControllerUpdate');
    throwIfNullOrUndefined(
      updateForestStewardshipPlanDto,
      'updateForestStewardshipPlanDto',
      'forestStewardshipPlanControllerUpdate'
    );

    const headers: HttpHeaders = {
      'Content-Type': 'application/json',
    };

    return this.request<void>(
      {
        url: '/api/forest-stewardship-plan/{id}'.replace('{id}', encodeURI(id)),
        method: 'PUT',
        headers,
        body: updateForestStewardshipPlanDto,
      },
      opts ? opts.responseOpts : undefined
    );
  }
}