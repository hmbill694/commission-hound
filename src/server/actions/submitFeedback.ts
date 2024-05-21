"use server"

import { z } from "zod"

const submitFeedbackRequestSchema = z.object({
  text: z.string({ message: "text is required" }),
  messageType: z.enum(["bug", "feature"], { message: "type must be either bug or feature" })
})

export default async function submitFeedback(formdata: FormData) {
  const formDataObject = Object.fromEntries(formdata.entries())

  const { data, error, success } = submitFeedbackRequestSchema.safeParse(formDataObject)

  if (!success) {
    return { errors: error.errors.map(err => err.message) }
  }


  // TODO: SEND EMAIL TO ME
  console.log("success", data)
}