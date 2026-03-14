import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";

const dbFileName = process.env.DB_FILE_NAME;
if (!dbFileName) {
	throw new Error("DB_FILE_NAME environment variable is not set");
}

export const db = drizzle(dbFileName);
