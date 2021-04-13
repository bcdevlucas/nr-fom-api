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
 * @interface AttachmentDto
 */
export interface AttachmentDto {
  /**
   * @type {number}
   * @memberof AttachmentDto
   */
  id: number;
  /**
   * @type {number}
   * @memberof AttachmentDto
   */
  revisionCount: number;
  /**
   * @type {string}
   * @memberof AttachmentDto
   */
  createTimestamp: string;
  /**
   * @type {string}
   * @memberof AttachmentDto
   */
  createUser: string;
  /**
   * @type {string}
   * @memberof AttachmentDto
   */
  updateTimestamp: string;
  /**
   * @type {string}
   * @memberof AttachmentDto
   */
  updateUser: string;
  /**
   * @type {string}
   * @memberof AttachmentDto
   */
  fileName: string;
  /**
   * @type {string}
   * @memberof AttachmentDto
   */
  fileContents: string;
  /**
   * @type {number}
   * @memberof AttachmentDto
   */
  projectId: number;
  /**
   * @type {string}
   * @memberof AttachmentDto
   */
  attachmentTypeCode: string;
}