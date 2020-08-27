/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGiftInput = {
  id?: string | null,
  person: string,
  description?: string | null,
  gifts: Array< string >,
};

export type ModelGiftConditionInput = {
  person?: ModelStringInput | null,
  description?: ModelStringInput | null,
  gifts?: ModelStringInput | null,
  and?: Array< ModelGiftConditionInput | null > | null,
  or?: Array< ModelGiftConditionInput | null > | null,
  not?: ModelGiftConditionInput | null,
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

export type UpdateGiftInput = {
  id: string,
  person?: string | null,
  description?: string | null,
  gifts?: Array< string > | null,
};

export type DeleteGiftInput = {
  id?: string | null,
};

export type ModelGiftFilterInput = {
  id?: ModelIDInput | null,
  person?: ModelStringInput | null,
  description?: ModelStringInput | null,
  gifts?: ModelStringInput | null,
  and?: Array< ModelGiftFilterInput | null > | null,
  or?: Array< ModelGiftFilterInput | null > | null,
  not?: ModelGiftFilterInput | null,
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

export type CreateGiftMutationVariables = {
  input: CreateGiftInput,
  condition?: ModelGiftConditionInput | null,
};

export type CreateGiftMutation = {
  createGift:  {
    __typename: "Gift",
    id: string,
    person: string,
    description: string | null,
    gifts: Array< string >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGiftMutationVariables = {
  input: UpdateGiftInput,
  condition?: ModelGiftConditionInput | null,
};

export type UpdateGiftMutation = {
  updateGift:  {
    __typename: "Gift",
    id: string,
    person: string,
    description: string | null,
    gifts: Array< string >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGiftMutationVariables = {
  input: DeleteGiftInput,
  condition?: ModelGiftConditionInput | null,
};

export type DeleteGiftMutation = {
  deleteGift:  {
    __typename: "Gift",
    id: string,
    person: string,
    description: string | null,
    gifts: Array< string >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetGiftQueryVariables = {
  id: string,
};

export type GetGiftQuery = {
  getGift:  {
    __typename: "Gift",
    id: string,
    person: string,
    description: string | null,
    gifts: Array< string >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGiftsQueryVariables = {
  filter?: ModelGiftFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGiftsQuery = {
  listGifts:  {
    __typename: "ModelGiftConnection",
    items:  Array< {
      __typename: "Gift",
      id: string,
      person: string,
      description: string | null,
      gifts: Array< string >,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateGiftSubscription = {
  onCreateGift:  {
    __typename: "Gift",
    id: string,
    person: string,
    description: string | null,
    gifts: Array< string >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGiftSubscription = {
  onUpdateGift:  {
    __typename: "Gift",
    id: string,
    person: string,
    description: string | null,
    gifts: Array< string >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGiftSubscription = {
  onDeleteGift:  {
    __typename: "Gift",
    id: string,
    person: string,
    description: string | null,
    gifts: Array< string >,
    createdAt: string,
    updatedAt: string,
  } | null,
};
