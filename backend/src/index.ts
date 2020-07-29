import { use } from 'nexus'
import { prisma } from 'nexus-plugin-prisma'
import { PrismaClient } from 'nexus-plugin-prisma/client'

use(prisma({
    client: {
        instance: new PrismaClient()
    },
    migrations: true,
    features: {
        crud: true
    }
}))