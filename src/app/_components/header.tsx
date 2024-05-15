import Link from "next/link"
import { Button } from "../../components/ui/button"
import ProfileButton from "./profile-button"
import { auth } from "@clerk/nextjs/server"


export default async function Header() {

  const { userId } = await auth()

  return (
    <header className="bg-gray-900 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link className="text-white font-bold text-xl" href="/">
          BrokerBoost
        </Link>
      </div>
      <div className="flex gap-2 items-center">
        {!userId ? null : (
          <>
            <Link href={`/listings/${userId}`}>
              <Button>
                My listings
              </Button>
            </Link>
            <Link href="/submit-feedback">
              <Button>Feedback</Button>
            </Link>
          </>
        )}
        <div>
          <ProfileButton userId={userId} />
        </div>
      </div>
    </header>
  )
}