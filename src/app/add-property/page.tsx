"use server"
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import createProperty from "~/server/actions/createProperty";

export default async function AddPropertyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Create Property</h1>
          <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
            Add a new property to your real estate portfolio.
          </p>
        </div>
        <form className="space-y-6" action={createProperty}>
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Label htmlFor="asking-price">Asking Price</Label>
              <Input className="mt-1" id="asking-price" name="askingPrice" placeholder="Enter asking price" type="number" />
            </div>
            <div className="sm:col-span-3">
              <Label htmlFor="commission-rate">Commission Rate</Label>
              <Input className="mt-1" id="commission-rate" name="commissionRate" placeholder="Enter commission rate" required />
            </div>
            <div className="sm:col-span-6">
              <Label htmlFor="name">Name</Label>
              <Input className="mt-1" id="name" name="name" placeholder="Enter property name" type="text" />
            </div>
            <div className="sm:col-span-6">
              <Label htmlFor="address">Address</Label>
              <Textarea className="mt-1" id="address" name="address" placeholder="Enter property address" required />
            </div>
          </div>
          <div className="flex justify-end">
            <Button className="px-4 py-2" type="submit">
              Create Property
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}