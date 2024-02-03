/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getDiaryPost = /* GraphQL */ `query GetDiaryPost($name: String!, $date: AWSDate!) {
  getDiaryPost(name: $name, date: $date) {
    name
    date
    text
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDiaryPostQueryVariables,
  APITypes.GetDiaryPostQuery
>;
export const listDiaryPosts = /* GraphQL */ `query ListDiaryPosts(
  $filter: TableDiaryPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listDiaryPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      name
      date
      text
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDiaryPostsQueryVariables,
  APITypes.ListDiaryPostsQuery
>;
