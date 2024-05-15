import { eq } from "drizzle-orm";
import { db } from "../db";
import { propertyTable } from "../db/schema";
import { clerkClient } from "@clerk/nextjs/server";

export async function getInquiresData(userId: string) {
  const user = await clerkClient.users.getUser(userId)

  const properties = await db.select().from(propertyTable).where(eq(propertyTable.userId, userId))

  return {
    agentFirstName: user.firstName,
    agentLastName: user.lastName,
    properties
  }
}
