import { objectType, queryType, stringArg, mutationType } from "@nexus/schema"

export const User = objectType({
    name: 'User',
    definition: t => {
        t.model.id()
        t.model.name()
        t.model.email()
    }
})

export const UserQuery = queryType({
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

export const UserMutation = mutationType({
    definition: t => {
        t.field('createUser', {
            type: 'User',
            args: {
                name: stringArg({ required: true }),
                password: stringArg({ required: true }),
                email: stringArg({ required: true })
            },
            resolve: async (parent, { name, password, email }, { prisma }, info) => {
                return await prisma.user.create({
                    data: {
                        name,
                        email,
                        password
                    }
                })
            }
        })
    }
})
