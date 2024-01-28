/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateDiseases = /* GraphQL */ `subscription OnCreateDiseases($filter: ModelSubscriptionDiseasesFilterInput) {
  onCreateDiseases(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDiseasesSubscriptionVariables,
  APITypes.OnCreateDiseasesSubscription
>;
export const onUpdateDiseases = /* GraphQL */ `subscription OnUpdateDiseases($filter: ModelSubscriptionDiseasesFilterInput) {
  onUpdateDiseases(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDiseasesSubscriptionVariables,
  APITypes.OnUpdateDiseasesSubscription
>;
export const onDeleteDiseases = /* GraphQL */ `subscription OnDeleteDiseases($filter: ModelSubscriptionDiseasesFilterInput) {
  onDeleteDiseases(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDiseasesSubscriptionVariables,
  APITypes.OnDeleteDiseasesSubscription
>;
