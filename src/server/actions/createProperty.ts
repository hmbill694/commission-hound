"use server"
import { z } from "zod"
import { db } from "../db"
import { propertyTable } from "../db/schema"
import { v4 as uuidv4 } from 'uuid';
import { redirect } from "next/navigation";


const createPropertyRequestSchema = z.object({
  address: z.string(),
  name: z.string().optional(),
  askingPrice: z.string(),
  commissionRate: z.string()
})

export default async function createProperty(formData: FormData) {
  const formDataObject = Object.fromEntries(formData.entries())

  const { success, data, error } = createPropertyRequestSchema.safeParse(formDataObject)

  if (!success) {
    return { errors: error.errors.flat() }
  }

  await db.insert(propertyTable).values({
    id: uuidv4(),
    address: data.address,
    name: data.name,
    createdAt: new Date(),
    updatedAt: null,
    userId: uuidv4(),
    askingPrice: data.askingPrice,
    commissionRate: data.commissionRate
  })

  redirect("/")
}