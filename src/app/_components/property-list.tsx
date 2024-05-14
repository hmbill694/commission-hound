"use client"
import React, { useMemo } from 'react'
import PropertyCard, { PropertyCardProps } from './property-card'
import { useSearchParams } from 'next/navigation'
import useSearchBarFilter from '~/hooks/useSearchBarFiler'

export type PropertyListProps = {
  properties: PropertyCardProps[]
}

function PropertyList({ properties }: PropertyListProps) {
  const [visibleCards] = useSearchBarFilter({
    data: properties,
    filterFn: (ele, filterValue) =>
      ele?.address?.toLocaleLowerCase()?.includes(filterValue.toLocaleLowerCase()) ||
      ele?.description?.toLocaleLowerCase()?.includes(filterValue.toLocaleLowerCase())
  })

  if (!visibleCards || visibleCards.length === 0) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        <div>No properties found. Let's onboard some!</div>
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