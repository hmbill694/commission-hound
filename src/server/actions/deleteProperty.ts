"use server"
import { z } from "zod"
import { db } from "../db"
import { propertyTable } from "../db/schema"
import { and, eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { auth } from "@clerk/nextjs/server"

const deletePropertyRequestSchema = z.object({
  id: z.string().uuid()
})

export default async function deleteProperty(formData: FormData) {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const formDataObject = Object.fromEntries(formData.entries())

  const { data, error, success } = deletePropertyRequestSchema.safeParse(formDataObject)

  if (!success) {
    return { errors: error.errors.flat() }
  }

  await db.delete(propertyTable).where(and(
    eq(propertyTable.id, data.id),
    eq(propertyTable.userId, user.userId)
  ))

  revalidatePath("/")
}