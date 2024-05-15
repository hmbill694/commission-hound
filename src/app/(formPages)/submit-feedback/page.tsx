import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import FormContainer from "../_components/formContainer";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import submitFeedback from "~/server/actions/submitFeedback";

export default async function SubmitFeedbackPage() {
  return (
    <FormContainer title="Submit any feedback you have for us." action={submitFeedback}>
      <>
        <p className="text-sm text-gray-500 dark:text-gray-400">Please let us know how we can improve.</p>
        <RadioGroup defaultValue="feature" name="type">
          <div className="flex items-center space-x-2">
            <RadioGroupItem id="feature" value="feature" />
            <Label htmlFor="feature">Feature Request</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem id="bug" value="bug" />
            <Label htmlFor="bug">Bug Report</Label>
          </div>
        </RadioGroup>
        <div className="space-y-2">
          <Label htmlFor="feedback">Feedback</Label>
          <Textarea className="min-h-[100px]" id="feedback" placeholder="Enter your feedback here..." name="text" />
        </div>
        <div className="flex justify-end space-x-2">
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Submit</Button>
        </div>
      </>
    </FormContainer>
  )
}