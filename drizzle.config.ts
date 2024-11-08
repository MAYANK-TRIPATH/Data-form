import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./configs/schema.ts",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATBASE_URL_CONFIG!,
  }
});