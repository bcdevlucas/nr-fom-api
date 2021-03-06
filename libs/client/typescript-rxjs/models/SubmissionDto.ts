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
 * @interface SubmissionDto
 */
export interface SubmissionDto {
  /**
   * @type {number}
   * @memberof SubmissionDto
   */
  id: number;
  /**
   * @type {number}
   * @memberof SubmissionDto
   */
  revisionCount: number;
  /**
   * @type {string}
   * @memberof SubmissionDto
   */
  createTimestamp: string;
  /**
   * @type {string}
   * @memberof SubmissionDto
   */
  createUser: string;
  /**
   * @type {string}
   * @memberof SubmissionDto
   */
  updateTimestamp: string;
  /**
   * @type {string}
   * @memberof SubmissionDto
   */
  updateUser: string;
  /**
   * @type {object}
   * @memberof SubmissionDto
   */
  geometry: object;
  /**
   * @type {number}
   * @memberof SubmissionDto
   */
  projectId: number;
  /**
   * @type {object}
   * @memberof SubmissionDto
   */
  project: object;
  /**
   * @type {string}
   * @memberof SubmissionDto
   */
  submissionTypeCode: string;
  /**
   * @type {object}
   * @memberof SubmissionDto
   */
  submissionType: object;
}
