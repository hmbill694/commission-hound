import { db } from "../db";
import { propertyTable } from "../db/schema";

export async function getProperties() {
  return db.select().from(propertyTable)
}