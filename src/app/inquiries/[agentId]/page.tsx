import { Input } from "~/components/ui/input"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "~/components/ui/table"

export default function InquiresPage() {
  return (
    <div className="max-w-6xl mx-auto p-4 lg:px-6 sm:py-8 md:py-10">
      <section className="flex flex-col gap-4 sm:flex-row sm:items-center pb-4 sm:pb-8">
        <h1 className="text-xl lg:text-3xl font-semibold tracking-tight">Properties Managed by Jane Doe</h1>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="flex-1 ml-auto sm:flex-initial">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                placeholder="Search by address..."
                type="search"
              />
            </div>
          </form>
        </div>
      </section>
      <section className="relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
        <div className="border-b dark:border-gray-700">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Address</TableHead>
                <TableHead className="w-[150px]">Commission Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">123 Main St, Anytown USA</TableCell>
                <TableCell>5%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">456 Oak Rd, Somewhere CA</TableCell>
                <TableCell>6%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">789 Maple Ave, Elsewhere NY</TableCell>
                <TableCell>4.5%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">321 Pine St, Anywhere FL</TableCell>
                <TableCell>5.5%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">159 Elm Blvd, Someplace TX</TableCell>
                <TableCell>6.25%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  )
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}