/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateDiaryPost = /* GraphQL */ `subscription OnCreateDiaryPost($name: String, $date: AWSDate, $text: String) {
  onCreateDiaryPost(name: $name, date: $date, text: $text) {
    name
    date
    text
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDiaryPostSubscriptionVariables,
  APITypes.OnCreateDiaryPostSubscription
>;
export const onUpdateDiaryPost = /* GraphQL */ `subscription OnUpdateDiaryPost($name: String, $date: AWSDate, $text: String) {
  onUpdateDiaryPost(name: $name, date: $date, text: $text) {
    name
    date
    text
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDiaryPostSubscriptionVariables,
  APITypes.OnUpdateDiaryPostSubscription
>;
export const onDeleteDiaryPost = /* GraphQL */ `subscription OnDeleteDiaryPost($name: String, $date: AWSDate, $text: String) {
  onDeleteDiaryPost(name: $name, date: $date, text: $text) {
    name
    date
    text
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDiaryPostSubscriptionVariables,
  APITypes.OnDeleteDiaryPostSubscription
>;
