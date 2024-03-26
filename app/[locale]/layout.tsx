import { Noto_Sans, Noto_Sans_JP } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'

import { cn } from '@/lib/utils'
import SideMenu from '@/components/SideMenu'
import Header from '@/components/Header'

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
      <body className={cn('max-w-[1600px] w-full mx-auto flex flex-col lg:flex-row', fontStyle)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SideMenu className="sticky top-0 hidden lg:block min-w-[330px]" />
          <Header className="lg:hidden h-[70px] sm:h-[130px]" />
          <main className="min-h-[calc(100vh-70px)] sm:min-h-[calc(100vh-130px)] lg:min-h-screen w-full">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
