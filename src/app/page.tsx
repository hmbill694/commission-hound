import Link from "next/link"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import SearchBar from "~/components/ui/search-bar"
import PropertyCard, { PropertyCardProps } from "./_components/property-card"

const properties: PropertyCardProps[] = [
  {
    id: "1",
    address: "123 Main St, Anytown USA",
    description: "Spacious 3-bedroom, 2-bathroom home with a large backyard and two- car garage",
    imageSrc: "image.src"
  },
  {
    id: "2",
    address: "123 Main St, Anytown USA",
    description: "Spacious 3-bedroom, 2-bathroom home with a large backyard and two- car garage",
    imageSrc: "image.src"
  },
  {
    id: "3",
    address: "123 Main St, Anytown USA",
    description: "Spacious 3-bedroom, 2-bathroom home with a large backyard and two- car garage",
    imageSrc: "image.src"
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
            <Button variant="outline">Add Property</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {properties.map((property) => <PropertyCard key={property.id} {...property} />)}
        </div>
      </main>
    </>
  )
}