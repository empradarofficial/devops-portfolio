import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { PrismaClient } from "@/generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
  pgPool: Pool | undefined;
};

/**
 * Newer `pg` treats `sslmode=require` as verify-full, which fails against
 * Supabase's certificate chain. Force libpq-compatible SSL.
 */
function toPgConnectionString(raw: string) {
  const url = new URL(raw);
  url.searchParams.set("sslmode", "require");
  url.searchParams.set("uselibpqcompat", "true");
  return url.toString();
}

function createPrismaClient() {
  const raw = process.env.DATABASE_URL;

  if (!raw) {
    throw new Error(
      "Missing DATABASE_URL — add your Supabase Postgres URL to .env.local",
    );
  }

  const pool =
    globalForPrisma.pgPool ??
    new Pool({
      connectionString: toPgConnectionString(raw),
      max: 10,
    });

  if (process.env.NODE_ENV !== "production") {
    globalForPrisma.pgPool = pool;
  }

  return new PrismaClient({ adapter: new PrismaPg(pool) });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
