import { makeSchema } from '@nexus/schema'
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema'
import { User, Query } from './Query'

export default makeSchema({
    types: [User, Query],
    plugins: [nexusSchemaPrisma()],
    outputs: {
      schema: __dirname + '/../schema.graphql',
      typegen: __dirname + '/generated/nexus.ts',
    },
    typegenAutoConfig: {
      contextType: 'Context.Context',
      sources: [
        {
          source: '@prisma/client',
          alias: 'prisma',
        },
        {
          source: require.resolve('../context'),
          alias: 'Context',
        },
      ],
    },
  })