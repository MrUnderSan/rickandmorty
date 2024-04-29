import { graphql } from '@/gql';

export const GET_CHARACTERS = graphql(/* GraphQL */ `
  query getCharacters {
    characters {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
      }
    }
  }
`);
