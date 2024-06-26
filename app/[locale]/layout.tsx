import { NextIntlClientProvider } from 'next-intl'

import { cn } from '@/lib/utils'
import SideMenu from '@/components/SideMenu'
import Header from '@/components/Header'
import { mainHeight } from '@/components/styles'
import { notoSans, notoSansJP } from '../../lib/font'

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

  const localeFontStyle = locale === 'ja' ? notoSansJP.className : notoSans.className

  return (
    <html lang={locale}>
      <body className={cn('max-w-[2800px] w-screen overflow-x-hidden mx-auto flex flex-col lg:flex-row')}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SideMenu className={cn('fixed top-0 hidden lg:block min-w-[330px]', notoSans.className)} />
          <Header className={cn('fixed top-0 lg:hidden sm:h-[130px]', notoSans.className)} />
          <main
            className={cn(
              'w-full lg:max-w-[calc(100vw-330px)] mt-[92px] sm:mt-[130px] lg:mt-0 lg:ml-[330px] overflow-x-hidden',
              mainHeight,
              localeFontStyle
            )}
          >
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
