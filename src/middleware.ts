import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isUnprotected = createRouteMatcher(["/listings(.*)"])

export default clerkMiddleware((auth, request) => {
  if (!isUnprotected(request)) {
    auth().protect()
  }
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};