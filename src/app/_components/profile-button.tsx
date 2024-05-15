"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

type ProfileButtonProps = {
  userId: string | null
}

export default function ProfileButton({ userId }: ProfileButtonProps) {
  return !userId ? <SignInButton /> : (
    <>
      <SignedOut>
        <SignInButton>Sign In</SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  )

}