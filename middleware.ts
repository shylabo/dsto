import createMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'

const locales = ['ja', 'en']
const defaultLocale = 'ja'

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
})

export default function middleware(req: NextRequest) {
  return intlMiddleware(req)
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
