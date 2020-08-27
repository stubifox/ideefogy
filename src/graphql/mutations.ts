/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGift = /* GraphQL */ `
  mutation CreateGift(
    $input: CreateGiftInput!
    $condition: ModelGiftConditionInput
  ) {
    createGift(input: $input, condition: $condition) {
      id
      person
      description
      gifts
      createdAt
      updatedAt
    }
  }
`;
export const updateGift = /* GraphQL */ `
  mutation UpdateGift(
    $input: UpdateGiftInput!
    $condition: ModelGiftConditionInput
  ) {
    updateGift(input: $input, condition: $condition) {
      id
      person
      description
      gifts
      createdAt
      updatedAt
    }
  }
`;
export const deleteGift = /* GraphQL */ `
  mutation DeleteGift(
    $input: DeleteGiftInput!
    $condition: ModelGiftConditionInput
  ) {
    deleteGift(input: $input, condition: $condition) {
      id
      person
      description
      gifts
      createdAt
      updatedAt
    }
  }
`;
