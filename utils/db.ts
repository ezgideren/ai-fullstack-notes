import { PrismaClient } from '@prisma/client'

// This creates a type for the global scope to store our Prisma instance
// In Next.js, this helps prevent creating multiple instances during hot reloading
// This is a TypeScript technique to extend global objects
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Export a singleton instance of PrismaClient
// This uses a pattern called "logical OR assignment" (??):
//   - If globalForPrisma.prisma exists, use that instance
//   - If not, create a new PrismaClient instance
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'], // This enables logging of SQL queries for debugging
  })

// In development environments, save the Prisma instance to the global object
// This prevents creating multiple connections during hot reloading
// In production, this line won't execute, so a new instance is created only once
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma