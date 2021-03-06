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
import { ProjectDto } from '../models';

export interface ProjectsControllerFindByFspIdRequest {
  id: number;
}

/**
 * no description
 */
export class ProjectsApi extends BaseAPI {
  /**
   */
  projectsControllerFindAll(): Observable<Array<ProjectDto>>;
  projectsControllerFindAll(
    opts?: OperationOpts
  ): Observable<RawAjaxResponse<Array<ProjectDto>>>;
  projectsControllerFindAll(
    opts?: OperationOpts
  ): Observable<Array<ProjectDto> | RawAjaxResponse<Array<ProjectDto>>> {
    return this.request<Array<ProjectDto>>(
      {
        url: '/api/projects',
        method: 'POST',
      },
      opts ? opts.responseOpts : undefined
    );
  }

  /**
   */
  projectsControllerFindByFspId({
    id,
  }: ProjectsControllerFindByFspIdRequest): Observable<Array<ProjectDto>>;
  projectsControllerFindByFspId(
    { id }: ProjectsControllerFindByFspIdRequest,
    opts?: OperationOpts
  ): Observable<RawAjaxResponse<Array<ProjectDto>>>;
  projectsControllerFindByFspId(
    { id }: ProjectsControllerFindByFspIdRequest,
    opts?: OperationOpts
  ): Observable<Array<ProjectDto> | RawAjaxResponse<Array<ProjectDto>>> {
    throwIfNullOrUndefined(id, 'id', 'projectsControllerFindByFspId');

    return this.request<Array<ProjectDto>>(
      {
        url: '/api/projects/byFspId/{id}'.replace('{id}', encodeURI(id)),
        method: 'GET',
      },
      opts ? opts.responseOpts : undefined
    );
  }
}
