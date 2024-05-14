import submitFeedback from "~/server/actions/submitFeedback";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Textarea } from "./ui/textarea";

export default function FeedbackButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Feedback</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-6">
        <form className="space-y-4" action={submitFeedback}>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Feedback</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Please let us know how we can improve.</p>
          </div>
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
        </form>
      </PopoverContent>
    </Popover>
  )
}