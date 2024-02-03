/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createDiaryPost = /* GraphQL */ `mutation CreateDiaryPost($input: CreateDiaryPostInput!) {
  createDiaryPost(input: $input) {
    name
    date
    text
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDiaryPostMutationVariables,
  APITypes.CreateDiaryPostMutation
>;
export const updateDiaryPost = /* GraphQL */ `mutation UpdateDiaryPost($input: UpdateDiaryPostInput!) {
  updateDiaryPost(input: $input) {
    name
    date
    text
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDiaryPostMutationVariables,
  APITypes.UpdateDiaryPostMutation
>;
export const deleteDiaryPost = /* GraphQL */ `mutation DeleteDiaryPost($input: DeleteDiaryPostInput!) {
  deleteDiaryPost(input: $input) {
    name
    date
    text
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDiaryPostMutationVariables,
  APITypes.DeleteDiaryPostMutation
>;
