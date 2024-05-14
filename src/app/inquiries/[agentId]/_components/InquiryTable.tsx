"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import useSearchBarFilter from "~/hooks/useSearchBarFiler";

const headerNames = [
  "Address",
  "Commission Rate",
  "Asking Price"
]

export type InquiryTableProps = {
  properties: { address: string, commissionRate: string, askingPrice: string }[]
}

export default function InquiryTable({ properties }: InquiryTableProps) {

  const [filteredRows = []] = useSearchBarFilter({
    data: properties ?? [],
    filterFn: (ele, value) => ele?.address.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  })

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headerNames.map(colName => <TableHead className="w-[200px]">{colName}</TableHead>)}
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredRows.map(property => (
          <TableRow>
            <TableCell className="font-medium">{property.address}</TableCell>
            <TableCell>{property.commissionRate}%</TableCell>
            <TableCell>${property.askingPrice}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}