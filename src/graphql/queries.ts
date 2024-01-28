/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getDiseases = /* GraphQL */ `query GetDiseases($id: ID!) {
  getDiseases(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetDiseasesQueryVariables,
  APITypes.GetDiseasesQuery
>;
export const listDiseases = /* GraphQL */ `query ListDiseases(
  $filter: ModelDiseasesFilterInput
  $limit: Int
  $nextToken: String
) {
  listDiseases(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDiseasesQueryVariables,
  APITypes.ListDiseasesQuery
>;
