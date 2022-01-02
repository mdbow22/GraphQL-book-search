const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if(context.user) {
                return User.findOne({
                    $or: [{ _id: context.user._id}, { username: context.user.username }],
                  })
            }
        }
    },
    Mutation: {
        createUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user};
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email: email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
              }
            
            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
    
            const token = signToken(user);
    
            return { token, user };
        },
        saveBook: async (parent, { bookId }, context) => {
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { savedBooks: { bookId: bookId } } },
                { new: true }
              );

            if(!updatedUser) {
                throw new AuthenticationError('You must be logged in to save a book');
            }

            return updatedUser;
        },
        deleteBook: async (parent, { bookId }, context) => {
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { savedBooks: { bookId: bookId } } },
                { new: true }
              );

            if(!updatedUser) {
                throw new AuthenticationError('You must be logged into delete a book');
            }

            return updatedUser;
        }
    }
}

module.exports = resolvers;