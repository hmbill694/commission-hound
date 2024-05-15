"use server"
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import FormContainer from "../_components/formContainer";
import createProperty from "~/server/actions/createProperty";

export default async function AddPropertyPage() {
  return (
    <FormContainer title="Add a new property to your real estate portfolio." action={createProperty}>
      <>
        <div>
          <Label htmlFor="asking-price">Asking Price</Label>
          <Input className="mt-1" id="asking-price" name="askingPrice" placeholder="Enter asking price" type="number" />
        </div>
        <div>
          <Label htmlFor="commission-rate">Commission Rate</Label>
          <Input className="mt-1" id="commission-rate" name="commissionRate" placeholder="Enter commission rate" required />
        </div>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input className="mt-1" id="name" name="name" placeholder="Enter property name" type="text" />
        </div>
        <div>
          <Label htmlFor="address">Address</Label>
          <Textarea className="mt-1" id="address" name="address" placeholder="Enter property address" required />
        </div>
        <div className="flex justify-end">
          <Button className="px-4 py-2" type="submit">
            Create Property
          </Button>
        </div>
      </>
    </FormContainer >
  )
}