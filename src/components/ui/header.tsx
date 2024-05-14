"use client";
import Link from "next/link"
import FeedbackButton from "../feeback-button"
import { Button } from "./button"
import { SignInButton } from "@clerk/nextjs"
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"

function Header() {
  return (
    <header className="bg-gray-900 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link className="text-white font-bold text-xl" href="/">
          BrokerBoost
        </Link>
      </div>
      <div className="flex gap-2 items-center">
        <Link href={`/inquiries/123`}>
          <Button>
            My listings
          </Button>
        </Link>
        <FeedbackButton />
        <div>
          <SignedOut>
            <SignInButton>Sign In</SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  )
}


export default Header