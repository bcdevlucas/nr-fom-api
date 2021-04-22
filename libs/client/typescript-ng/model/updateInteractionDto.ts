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

export interface UpdateInteractionDto {
  revisionCount: number;
  createTimestamp: string;
  createUser: string;
  updateTimestamp: string;
  updateUser: string;
  stakeholder: string;
  communicationDate: string;
  communicationDetails: string;
  projectId: number;
  attachmentId: number;
}
