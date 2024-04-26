import { Noto_Sans, Noto_Sans_JP } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'

import { cn } from '@/lib/utils'
import SideMenu from '@/components/SideMenu'
import Header from '@/components/Header'
import { mainHeight } from '@/components/styles'

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap',
})

const notoSans = Noto_Sans({
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

  const fontStyle = locale === 'ja' ? notoSansJP.className : notoSans.className

  return (
    <html lang={locale}>
      <body className={cn('max-w-[2800px] w-screen overflow-x-hidden mx-auto flex flex-col lg:flex-row', fontStyle)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SideMenu className="sticky top-0 hidden lg:block min-w-[330px]" />
          <Header className="lg:hidden sm:h-[130px]" />
          <main className={`${mainHeight} w-full lg:max-w-[calc(100vw-330px)] overflow-x-hidden`}>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
