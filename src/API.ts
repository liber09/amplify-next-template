/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDiseasesInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  symptoms?: Array< string | null > | null,
  actions?: string | null,
  checkpoints?: Array< string | null > | null,
  selfcare?: Array< string | null > | null,
};

export type ModelDiseasesConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  symptoms?: ModelStringInput | null,
  actions?: ModelStringInput | null,
  checkpoints?: ModelStringInput | null,
  selfcare?: ModelStringInput | null,
  and?: Array< ModelDiseasesConditionInput | null > | null,
  or?: Array< ModelDiseasesConditionInput | null > | null,
  not?: ModelDiseasesConditionInput | null,
};

export type ModelStringInput = {
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
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Diseases = {
  __typename: "Diseases",
  id: string,
  name: string,
  description?: string | null,
  symptoms?: Array< string | null > | null,
  actions?: string | null,
  checkpoints?: Array< string | null > | null,
  selfcare?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateDiseasesInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  symptoms?: Array< string | null > | null,
  actions?: string | null,
  checkpoints?: Array< string | null > | null,
  selfcare?: Array< string | null > | null,
};

export type DeleteDiseasesInput = {
  id: string,
};

export type ModelDiseasesFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  symptoms?: ModelStringInput | null,
  actions?: ModelStringInput | null,
  checkpoints?: ModelStringInput | null,
  selfcare?: ModelStringInput | null,
  and?: Array< ModelDiseasesFilterInput | null > | null,
  or?: Array< ModelDiseasesFilterInput | null > | null,
  not?: ModelDiseasesFilterInput | null,
};

export type ModelIDInput = {
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
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelDiseasesConnection = {
  __typename: "ModelDiseasesConnection",
  items:  Array<Diseases | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionDiseasesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  symptoms?: ModelSubscriptionStringInput | null,
  actions?: ModelSubscriptionStringInput | null,
  checkpoints?: ModelSubscriptionStringInput | null,
  selfcare?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDiseasesFilterInput | null > | null,
  or?: Array< ModelSubscriptionDiseasesFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateDiseasesMutationVariables = {
  input: CreateDiseasesInput,
  condition?: ModelDiseasesConditionInput | null,
};

export type CreateDiseasesMutation = {
  createDiseases?:  {
    __typename: "Diseases",
    id: string,
    name: string,
    description?: string | null,
    symptoms?: Array< string | null > | null,
    actions?: string | null,
    checkpoints?: Array< string | null > | null,
    selfcare?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDiseasesMutationVariables = {
  input: UpdateDiseasesInput,
  condition?: ModelDiseasesConditionInput | null,
};

export type UpdateDiseasesMutation = {
  updateDiseases?:  {
    __typename: "Diseases",
    id: string,
    name: string,
    description?: string | null,
    symptoms?: Array< string | null > | null,
    actions?: string | null,
    checkpoints?: Array< string | null > | null,
    selfcare?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDiseasesMutationVariables = {
  input: DeleteDiseasesInput,
  condition?: ModelDiseasesConditionInput | null,
};

export type DeleteDiseasesMutation = {
  deleteDiseases?:  {
    __typename: "Diseases",
    id: string,
    name: string,
    description?: string | null,
    symptoms?: Array< string | null > | null,
    actions?: string | null,
    checkpoints?: Array< string | null > | null,
    selfcare?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetDiseasesQueryVariables = {
  id: string,
};

export type GetDiseasesQuery = {
  getDiseases?:  {
    __typename: "Diseases",
    id: string,
    name: string,
    description?: string | null,
    symptoms?: Array< string | null > | null,
    actions?: string | null,
    checkpoints?: Array< string | null > | null,
    selfcare?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDiseasesQueryVariables = {
  filter?: ModelDiseasesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDiseasesQuery = {
  listDiseases?:  {
    __typename: "ModelDiseasesConnection",
    items:  Array< {
      __typename: "Diseases",
      id: string,
      name: string,
      description?: string | null,
      symptoms?: Array< string | null > | null,
      actions?: string | null,
      checkpoints?: Array< string | null > | null,
      selfcare?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateDiseasesSubscriptionVariables = {
  filter?: ModelSubscriptionDiseasesFilterInput | null,
};

export type OnCreateDiseasesSubscription = {
  onCreateDiseases?:  {
    __typename: "Diseases",
    id: string,
    name: string,
    description?: string | null,
    symptoms?: Array< string | null > | null,
    actions?: string | null,
    checkpoints?: Array< string | null > | null,
    selfcare?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDiseasesSubscriptionVariables = {
  filter?: ModelSubscriptionDiseasesFilterInput | null,
};

export type OnUpdateDiseasesSubscription = {
  onUpdateDiseases?:  {
    __typename: "Diseases",
    id: string,
    name: string,
    description?: string | null,
    symptoms?: Array< string | null > | null,
    actions?: string | null,
    checkpoints?: Array< string | null > | null,
    selfcare?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDiseasesSubscriptionVariables = {
  filter?: ModelSubscriptionDiseasesFilterInput | null,
};

export type OnDeleteDiseasesSubscription = {
  onDeleteDiseases?:  {
    __typename: "Diseases",
    id: string,
    name: string,
    description?: string | null,
    symptoms?: Array< string | null > | null,
    actions?: string | null,
    checkpoints?: Array< string | null > | null,
    selfcare?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
