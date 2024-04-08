import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'

const locales = ['ja', 'en']
const defaultLocale = 'ja'
export type Locale = 'ja' | 'en'

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
})

export default function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    const validUser = process.env.BASIC_AUTH_USER
    const validPassWord = process.env.BASIC_AUTH_PASSWORD

    if (user === validUser && pwd === validPassWord) {
      return intlMiddleware(req)
    }
  }
  url.pathname = '/api/auth'
  return NextResponse.rewrite(url)
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
