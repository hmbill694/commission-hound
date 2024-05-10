"use client"

import { SearchIcon } from "lucide-react";
import { Input } from "./input";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';



function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      <Input
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
        name="q"
        className="pl-10 pr-4 py-2 rounded-md w-full"
        placeholder="Search properties..."
        type="text" />
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
    </>
  )
}

export default SearchBar;