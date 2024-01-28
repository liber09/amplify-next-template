/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createDiseases = /* GraphQL */ `mutation CreateDiseases(
  $input: CreateDiseasesInput!
  $condition: ModelDiseasesConditionInput
) {
  createDiseases(input: $input, condition: $condition) {
    id
    name
    description
    symptoms
    actions
    checkpoints
    selfcare
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDiseasesMutationVariables,
  APITypes.CreateDiseasesMutation
>;
export const updateDiseases = /* GraphQL */ `mutation UpdateDiseases(
  $input: UpdateDiseasesInput!
  $condition: ModelDiseasesConditionInput
) {
  updateDiseases(input: $input, condition: $condition) {
    id
    name
    description
    symptoms
    actions
    checkpoints
    selfcare
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDiseasesMutationVariables,
  APITypes.UpdateDiseasesMutation
>;
export const deleteDiseases = /* GraphQL */ `mutation DeleteDiseases(
  $input: DeleteDiseasesInput!
  $condition: ModelDiseasesConditionInput
) {
  deleteDiseases(input: $input, condition: $condition) {
    id
    name
    description
    symptoms
    actions
    checkpoints
    selfcare
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDiseasesMutationVariables,
  APITypes.DeleteDiseasesMutation
>;
