import { gql } from "@apollo/client";

export const GET_AllCustomers = gql`
  query {
    allCustomers {
      id
      customer_name
      transactions
    }
  }
`;