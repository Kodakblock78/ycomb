import { PrismaClient } from '@prisma/client';

// Instantiate Prisma Client
const prisma = new PrismaClient();

// Export the prisma instance for use in other parts of your application
export default prisma;