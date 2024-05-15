import { eq } from "drizzle-orm";
import { db } from "../db";
import { propertyTable } from "../db/schema";
import { auth } from "@clerk/nextjs/server";

export async function getProperties() {
  const { userId } = auth();

  if (!userId) throw new Error("Unauthorized");

  return db.select().from(propertyTable).where(eq(propertyTable.userId, userId))
}
