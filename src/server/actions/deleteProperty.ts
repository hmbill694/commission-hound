"use server"
import { z } from "zod"
import { db } from "../db"
import { propertyTable } from "../db/schema"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

const deletePropertyRequestSchema = z.object({
  id: z.string().uuid()
})

export default async function deleteProperty(formData: FormData) {
  const formDataObject = Object.fromEntries(formData.entries())

  const { data, error, success } = deletePropertyRequestSchema.safeParse(formDataObject)

  if (!success) {
    return { errors: error.errors.flat() }
  }

  await db.delete(propertyTable).where(eq(propertyTable.id, data.id))

  revalidatePath("/")
}