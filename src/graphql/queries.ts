/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGift = /* GraphQL */ `
  query GetGift($id: ID!) {
    getGift(id: $id) {
      id
      person
      description
      gifts
      createdAt
      updatedAt
    }
  }
`;
export const listGifts = /* GraphQL */ `
  query ListGifts(
    $filter: ModelGiftFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGifts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        person
        description
        gifts
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
