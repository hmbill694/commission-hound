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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {visibleCards.map((property) => <PropertyCard key={property.id} {...property} />)}
    </div>
  )
}

export default PropertyList