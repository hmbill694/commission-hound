import Link from "next/link"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import SearchBar from "~/components/ui/search-bar"
import PropertyCard, { PropertyCardProps } from "./_components/property-card"
import PropertyList from "./_components/property-list"

const properties: PropertyCardProps[] = [
  {
    id: "1",
    address: "123 Main St, Anytown, CA",
    description: "Cozy 3-bedroom, 2-bathroom home with a large backyard and two- car garage",
  },
  {
    id: "2",
    address: "456 Big Ave, Somewhere, AZ",
    description: "Rad 4-bedroom, 3-bathroom home with 4 acres",
  },
  {
    id: "3",
    address: "789 Park Place, Big City, NY",
    description: "Spacious 5-bedroom, 4-bathroom town home in the center of town near downtown",
  }
]

export default function HomePage() {
  return (
    <>
      <main className="">
        <div className="flex p-4 gap-2">
          <div className="relative w-full max-w-md">
            <SearchBar />
          </div>
          <Link href="/add-property">
            <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-200">Add Property</Button>
          </Link>
        </div>
        <PropertyList properties={properties} />
      </main>
    </>
  )
}