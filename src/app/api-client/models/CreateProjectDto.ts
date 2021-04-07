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

/**
 * @export
 * @interface CreateProjectDto
 */
export interface CreateProjectDto {
  /**
   * @type {number}
   * @memberof CreateProjectDto
   */
  id: number;
  /**
   * @type {number}
   * @memberof CreateProjectDto
   */
  revisionCount: number;
  /**
   * @type {string}
   * @memberof CreateProjectDto
   */
  createTimestamp: string;
  /**
   * @type {string}
   * @memberof CreateProjectDto
   */
  createUser: string;
  /**
   * @type {string}
   * @memberof CreateProjectDto
   */
  updateTimestamp: string;
  /**
   * @type {string}
   * @memberof CreateProjectDto
   */
  updateUser: string;
  /**
   * @type {string}
   * @memberof CreateProjectDto
   */
  name: string;
  /**
   * @type {string}
   * @memberof CreateProjectDto
   */
  description: string;
  /**
   * @type {string}
   * @memberof CreateProjectDto
   */
  commentingOpenDate: string;
  /**
   * @type {string}
   * @memberof CreateProjectDto
   */
  commentingClosedDate: string;
  /**
   * @type {number}
   * @memberof CreateProjectDto
   */
  fspId: number;
  /**
   * @type {number}
   * @memberof CreateProjectDto
   */
  districtId: number;
  /**
   * @type {object}
   * @memberof CreateProjectDto
   */
  district: object;
  /**
   * @type {string}
   * @memberof CreateProjectDto
   */
  forestClientNumber: string;
  /**
   * @type {object}
   * @memberof CreateProjectDto
   */
  forestClient: object;
  /**
   * @type {string}
   * @memberof CreateProjectDto
   */
  workflowStateCode: string;
  /**
   * @type {object}
   * @memberof CreateProjectDto
   */
  workflowState: object;
}