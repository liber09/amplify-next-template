/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDiaryPostInput = {
  name: string,
  date: string,
  text: string,
};

export type DiaryPost = {
  __typename: "DiaryPost",
  name: string,
  date?: string | null,
  text: string,
};

export type UpdateDiaryPostInput = {
  name: string,
  date: string,
  text?: string | null,
};

export type DeleteDiaryPostInput = {
  name: string,
  date: string,
};

export type TableDiaryPostFilterInput = {
  name?: TableStringFilterInput | null,
  date?: TableStringFilterInput | null,
  text?: TableStringFilterInput | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type DiaryPostConnection = {
  __typename: "DiaryPostConnection",
  items?:  Array<DiaryPost | null > | null,
  nextToken?: string | null,
};

export type CreateDiaryPostMutationVariables = {
  input: CreateDiaryPostInput,
};

export type CreateDiaryPostMutation = {
  createDiaryPost?:  {
    __typename: "DiaryPost",
    name: string,
    date?: string | null,
    text: string,
  } | null,
};

export type UpdateDiaryPostMutationVariables = {
  input: UpdateDiaryPostInput,
};

export type UpdateDiaryPostMutation = {
  updateDiaryPost?:  {
    __typename: "DiaryPost",
    name: string,
    date?: string | null,
    text: string,
  } | null,
};

export type DeleteDiaryPostMutationVariables = {
  input: DeleteDiaryPostInput,
};

export type DeleteDiaryPostMutation = {
  deleteDiaryPost?:  {
    __typename: "DiaryPost",
    name: string,
    date?: string | null,
    text: string,
  } | null,
};

export type GetDiaryPostQueryVariables = {
  name: string,
  date: string,
};

export type GetDiaryPostQuery = {
  getDiaryPost?:  {
    __typename: "DiaryPost",
    name: string,
    date?: string | null,
    text: string,
  } | null,
};

export type ListDiaryPostsQueryVariables = {
  filter?: TableDiaryPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDiaryPostsQuery = {
  listDiaryPosts?:  {
    __typename: "DiaryPostConnection",
    items?:  Array< {
      __typename: "DiaryPost",
      name: string,
      date?: string | null,
      text: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateDiaryPostSubscriptionVariables = {
  name?: string | null,
  date?: string | null,
  text?: string | null,
};

export type OnCreateDiaryPostSubscription = {
  onCreateDiaryPost?:  {
    __typename: "DiaryPost",
    name: string,
    date?: string | null,
    text: string,
  } | null,
};

export type OnUpdateDiaryPostSubscriptionVariables = {
  name?: string | null,
  date?: string | null,
  text?: string | null,
};

export type OnUpdateDiaryPostSubscription = {
  onUpdateDiaryPost?:  {
    __typename: "DiaryPost",
    name: string,
    date?: string | null,
    text: string,
  } | null,
};

export type OnDeleteDiaryPostSubscriptionVariables = {
  name?: string | null,
  date?: string | null,
  text?: string | null,
};

export type OnDeleteDiaryPostSubscription = {
  onDeleteDiaryPost?:  {
    __typename: "DiaryPost",
    name: string,
    date?: string | null,
    text: string,
  } | null,
};
