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
      <body className={cn('container mx-auto grid grid-cols-12', notoSans.className)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SideMenu className="sticky top-0 hidden md:block col-span-3" />
          <Header className="md:hidden h-[75px] col-span-12" />
          <main className="col-span-12 h-[calc(100vh-75px)] md:h-full md:col-span-9 md:py-32">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
