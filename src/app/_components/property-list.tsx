"use client"
import React from 'react'
import PropertyCard, { type PropertyCardProps } from './property-card'
import useSearchBarFilter from '~/hooks/useSearchBarFiler'

export type PropertyListProps = {
  properties: PropertyCardProps[]
}

function PropertyList({ properties }: PropertyListProps) {
  const [visibleCards] = useSearchBarFilter({
    data: properties,
    filterFn: (ele, filterValue) => {
      const description = ele?.description?.toLocaleLowerCase() ?? ""
      const address = ele?.address?.toLocaleLowerCase() ?? ""

      return description.includes(filterValue.toLocaleLowerCase()) || address.includes(filterValue.toLocaleLowerCase())
    }
  })

  if (!visibleCards || visibleCards.length === 0) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        <div>No properties found. Let`&apos;`s onboard some!</div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {visibleCards.map((property) => <PropertyCard key={property.id} {...property} />)}
    </div>
  )
}

export default PropertyList