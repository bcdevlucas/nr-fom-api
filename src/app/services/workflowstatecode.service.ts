import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import {catchError } from 'rxjs/operators';

import { ApiService } from './api';

import { WorkflowStateCode } from 'app/models/workflowstatecode';



/**
 * Provides methods for working with WorkflowStateCodes.
 *
 * @export
 * @class WorkflowStateCodeService
 */
@Injectable()
export class WorkflowStateCodeService {
  constructor(
    private api: ApiService
  ) {}


  /**
   * Get all workflowStateCodes.
   *
   * @returns {Observable<WorkflowStateCode[]>}
   * @memberof ProjectService
   */
  getAll(): Observable<WorkflowStateCode[]> {


    let observables: Observable<WorkflowStateCode[]>;


      observables = this.api.getWorkflowStateCodes();

      return observables;
  }
}