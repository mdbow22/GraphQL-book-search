const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String
        savedBooks: [Book]
        bookCount: Int
    }
    
    type Book {
        _id: ID
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input BookToSave {
        bookId: String!
        authors: [String]!
        title: String!
        description: String!
        image: String!
    }
    
    type Query {
        user(_id: ID, username: String): User
    }
    
    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook(book: BookToSave): User
        deleteBook(bookId: String!): User
    }`

module.exports = typeDefs;