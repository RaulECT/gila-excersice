import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query GetAllMessageCategories {
    getAllMessageCategories {
      id
      category
    }
  }
`
