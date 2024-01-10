'use client'
import { cn } from '@/lib/utils'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next-intl/client'
import { useRouter } from 'next/navigation' // This is intentionally used (instead of next-intl) to switch locale

interface LocaleSwitcherProps {
  className?: string
}

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({ className }) => {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const otherLocale = locale === 'ja' ? 'en' : 'ja'

  return (
    <button onClick={() => router.push(`/${otherLocale}/${pathname}`)} className={cn('w-max', className)}>
      {t('switchLocale', { locale: otherLocale })}
    </button>
  )
}

export default LocaleSwitcher
