"use server"
import React, { FormHTMLAttributes } from 'react'

type FormPageProps = {
  title: string
  action?: string | ((formData: FormData) => void)
  children: JSX.Element
}

export default async function FormContainer({ title, action, children }: FormPageProps) {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Create Property</h1>
        <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
          {title}
        </p>
      </div>
      <form className="space-y-6" action={action}>
        {children}
      </form>
    </>
  )
}
