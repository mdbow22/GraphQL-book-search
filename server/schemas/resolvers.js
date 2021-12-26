const { User } = require('../models');

const resolvers = {
    Query: {
        user: async (parent, args) => {
            return User.findOne({
                $or: [{ _id: args._id}, { username: args.username }],
              })
        }
    },
    
}

module.exports = resolvers;