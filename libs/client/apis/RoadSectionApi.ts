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
import { CreateRoadSectionDto, UpdateRoadSectionDto } from '../models';

export interface RoadSectionControllerCreateRequest {
  createRoadSectionDto: CreateRoadSectionDto;
}

export interface RoadSectionControllerFindOneRequest {
  id: number;
}

export interface RoadSectionControllerRemoveRequest {
  id: number;
}

export interface RoadSectionControllerUpdateRequest {
  id: number;
  updateRoadSectionDto: UpdateRoadSectionDto;
}

/**
 * no description
 */
export class RoadSectionApi extends BaseAPI {
  /**
   */
  roadSectionControllerCreate({
    createRoadSectionDto,
  }: RoadSectionControllerCreateRequest): Observable<void>;
  roadSectionControllerCreate(
    { createRoadSectionDto }: RoadSectionControllerCreateRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>>;
  roadSectionControllerCreate(
    { createRoadSectionDto }: RoadSectionControllerCreateRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>> {
    throwIfNullOrUndefined(
      createRoadSectionDto,
      'createRoadSectionDto',
      'roadSectionControllerCreate'
    );

    const headers: HttpHeaders = {
      'Content-Type': 'application/json',
    };

    return this.request<void>(
      {
        url: '/api/road-section',
        method: 'POST',
        headers,
        body: createRoadSectionDto,
      },
      opts?.responseOpts
    );
  }

  /**
   */
  roadSectionControllerFindOne({
    id,
  }: RoadSectionControllerFindOneRequest): Observable<void>;
  roadSectionControllerFindOne(
    { id }: RoadSectionControllerFindOneRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>>;
  roadSectionControllerFindOne(
    { id }: RoadSectionControllerFindOneRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>> {
    throwIfNullOrUndefined(id, 'id', 'roadSectionControllerFindOne');

    return this.request<void>(
      {
        url: '/api/road-section/{id}'.replace('{id}', encodeURI(id)),
        method: 'GET',
      },
      opts?.responseOpts
    );
  }

  /**
   */
  roadSectionControllerRemove({
    id,
  }: RoadSectionControllerRemoveRequest): Observable<void>;
  roadSectionControllerRemove(
    { id }: RoadSectionControllerRemoveRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>>;
  roadSectionControllerRemove(
    { id }: RoadSectionControllerRemoveRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>> {
    throwIfNullOrUndefined(id, 'id', 'roadSectionControllerRemove');

    return this.request<void>(
      {
        url: '/api/road-section/{id}'.replace('{id}', encodeURI(id)),
        method: 'DELETE',
      },
      opts?.responseOpts
    );
  }

  /**
   */
  roadSectionControllerUpdate({
    id,
    updateRoadSectionDto,
  }: RoadSectionControllerUpdateRequest): Observable<void>;
  roadSectionControllerUpdate(
    { id, updateRoadSectionDto }: RoadSectionControllerUpdateRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>>;
  roadSectionControllerUpdate(
    { id, updateRoadSectionDto }: RoadSectionControllerUpdateRequest,
    opts?: OperationOpts
  ): Observable<void | RawAjaxResponse<void>> {
    throwIfNullOrUndefined(id, 'id', 'roadSectionControllerUpdate');
    throwIfNullOrUndefined(
      updateRoadSectionDto,
      'updateRoadSectionDto',
      'roadSectionControllerUpdate'
    );

    const headers: HttpHeaders = {
      'Content-Type': 'application/json',
    };

    return this.request<void>(
      {
        url: '/api/road-section/{id}'.replace('{id}', encodeURI(id)),
        method: 'PUT',
        headers,
        body: updateRoadSectionDto,
      },
      opts?.responseOpts
    );
  }
}