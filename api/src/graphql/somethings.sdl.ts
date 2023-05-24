export const schema = gql`
  type Something {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
  }

  type Query {
    somethings: [Something!]! @skipAuth
    something(id: Int!): Something @skipAuth
  }

  input CreateSomethingInput {
    name: String!
  }

  input UpdateSomethingInput {
    name: String
  }

  type Mutation {
    createSomething(input: CreateSomethingInput!): Something! @requireAuth
    updateSomething(id: Int!, input: UpdateSomethingInput!): Something!
      @requireAuth
    deleteSomething(id: Int!): Something! @requireAuth
  }
`
