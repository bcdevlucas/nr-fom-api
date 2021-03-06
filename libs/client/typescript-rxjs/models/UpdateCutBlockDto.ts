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
 * @interface UpdateCutBlockDto
 */
export interface UpdateCutBlockDto {
  /**
   * @type {number}
   * @memberof UpdateCutBlockDto
   */
  revisionCount: number;
  /**
   * @type {string}
   * @memberof UpdateCutBlockDto
   */
  createTimestamp: string;
  /**
   * @type {string}
   * @memberof UpdateCutBlockDto
   */
  createUser: string;
  /**
   * @type {string}
   * @memberof UpdateCutBlockDto
   */
  updateTimestamp: string;
  /**
   * @type {string}
   * @memberof UpdateCutBlockDto
   */
  updateUser: string;
  /**
   * @type {object}
   * @memberof UpdateCutBlockDto
   */
  geometry: object;
  /**
   * @type {string}
   * @memberof UpdateCutBlockDto
   */
  plannedDevelopmentDate: string;
  /**
   * @type {number}
   * @memberof UpdateCutBlockDto
   */
  plannedAreaHa: number;
  /**
   * @type {number}
   * @memberof UpdateCutBlockDto
   */
  submissionId: number;
}
