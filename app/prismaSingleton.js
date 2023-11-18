// prisma.js
import { PrismaClient } from '@prisma/client';

let prisma;
if (process.env.NODE_ENV === 'production') {
  // In production, use a single Prisma instance
  prisma = new PrismaClient();
} else {
  // In development, enable hot-reloading
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
