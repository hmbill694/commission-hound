"use client"
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

type useSearchParamsConfig<T> = {
  data: T[],
  filterFn: (ele: T, filterValue: string) => boolean
  searchParamName?: string
}

export default function useSearchBarFilter<T>({ data = [], searchParamName = 'q', filterFn }: useSearchParamsConfig<T>) {
  const searchParams = useSearchParams();

  const filteredData = useMemo(() => {
    const params = new URLSearchParams(searchParams)
    const filterValue = params.get(searchParamName)

    if (!filterValue) {
      return data
    }

    return data.filter(ele => filterFn(ele, filterValue))

  }, [data, searchParams, filterFn])

  return [filteredData ?? []]
}