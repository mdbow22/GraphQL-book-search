import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query user {
    user {
      _id
      username
      email
      savedBooks {
        _id
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;