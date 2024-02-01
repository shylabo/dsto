import { Noto_Sans_JP } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'

import { cn } from '@/lib/utils'
import SideMenu from '@/components/SideMenu'
import Header from '@/components/Header'

const notoSans = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap',
})

interface LocaleLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

const LocaleLayout: React.FC<LocaleLayoutProps> = async ({ children, params: { locale } }) => {
  let messages
  try {
    messages = (await import(`./../../messages/${locale}.json`)).default
  } catch (error) {
    throw new Error('messages not found')
  }

  return (
    <html lang={locale}>
      <body className={cn('max-w-[1600px] w-full mx-auto flex flex-col md:flex-row', notoSans.className)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SideMenu className="sticky top-0 hidden md:block min-w-[330px]" />
          <Header className="md:hidden h-[75px]" />
          <main className="min-h-[calc(100vh-75px)] md:min-h-screen w-full">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
