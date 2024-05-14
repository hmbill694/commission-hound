import Link from "next/link"
import { Button } from "~/components/ui/button"
import SearchBar from "~/components/ui/search-bar"
import PropertyList from "./_components/property-list"
import { getProperties } from "~/server/queries/getProperties"

export default async function HomePage() {
  const properties = await getProperties()
  return (
    <>
      <div className="flex p-4 gap-2">
        <div className="relative w-full max-w-md">
          <SearchBar />
        </div>
        <Link href="/add-property">
          <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-200">Add Property</Button>
        </Link>
      </div>
      <PropertyList properties={properties ?? []} />
    </>
  )
}