import InquiryTable from "./_components/InquiryTable"
import SearchBar from "~/components/ui/search-bar"
import { getInquiresData } from "~/server/queries/getInquiresData"

export default async function InquiresPage({ params }: { params: { agentId: string } }) {
  const { agentFirstName, agentLastName, properties } = await getInquiresData(params.agentId)

  return (
    <div className="max-w-6xl mx-auto p-4 lg:px-6 sm:py-8 md:py-10">
      <section className="flex flex-col gap-4 sm:flex-row sm:items-center pb-4 sm:pb-8">
        <h1 className="text-xl lg:text-3xl font-semibold tracking-tight">Properties Managed by {agentFirstName} {agentLastName}</h1>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="flex-1 ml-auto sm:flex-initial">
            <div className="relative">
              <SearchBar />
            </div>
          </form>
        </div>
      </section>
      <section className="relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
        <div className="border-b dark:border-gray-700">
          <InquiryTable properties={properties} />
        </div>
      </section>
    </div>
  )
}