"use client"
import React, { useMemo } from 'react'
import PropertyCard, { PropertyCardProps } from './property-card'
import { useSearchParams } from 'next/navigation'

export type PropertyListProps = {
  properties: PropertyCardProps[]
}

function PropertyList({ properties }: PropertyListProps) {
  const searchParams = useSearchParams();

  const visibleCards = useMemo(() => {
    const params = new URLSearchParams(searchParams)
    const filterValue = params.get("q")

    if (!filterValue) {
      return properties
    }

    return properties.filter(ele => ele.address.includes(filterValue) || ele.description.includes(filterValue))

  }, [properties, searchParams])

  if (visibleCards.length === 0) {
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