import { makeSchema } from '@nexus/schema'
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema'

import { User, UserQuery, UserMutation } from './models'

export const schema = makeSchema({
  typegenAutoConfig: {
    contextType: '{ prisma: PrismaClient.PrismaClient }',
    sources: [{ source: '.prisma/client', alias: 'PrismaClient' }],
  },
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts'
  },
  plugins: [
    nexusSchemaPrisma({
      experimentalCRUD: true,
    }),
  ],
  types: [User, UserQuery, UserMutation]
})