import { objectType } from "@nexus/schema"

export const User = objectType({
    name: 'User',
    definition: t => {
        t.model.id()
        t.model.email()
    }
})

export const UserQuery = objectType({
    name: 'Query',
    definition: t => {
        t.field('users', {
            type: 'User',
            list: true,
            args: {},
            resolve: async (parent, args, context, info) => {
                return context.prisma.user.findMany()
            }
        })
    }
})