const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Address {
    street: String
    city: String
  }

  type Contact {
    type: String
    value: String
  }

  type Job {
    title: String
    company: String
    years: Int
  }

  type User {
    id: ID!
    name: String
    age: Int
    address: Address
    contacts: [Contact]
    jobHistory: [Job]
    hobbies: [String]
  }

  input AddressInput {
    street: String
    city: String
  }

  input ContactInput {
    type: String
    value: String
  }

  input JobInput {
    title: String
    company: String
    years: Int
  }

  input UserInput {
    name: String!
    age: Int
    address: AddressInput
    contacts: [ContactInput]
    jobHistory: [JobInput]
    hobbies: [String]
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(input: UserInput): User
    updateUser(id: ID!, input: UserInput): User
    deleteUser(id: ID!): String
  }
`);

module.exports = { schema };
