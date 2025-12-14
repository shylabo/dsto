'use client'
import { cn } from '@/lib/utils'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

interface LocaleSwitcherProps {
  className?: string
}

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({ className }) => {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const otherLocale = locale === 'ja' ? 'en' : 'ja'

  const handleLocaleSwitch = () => {
    // Split pathname and remove the first segment (current locale)
    const segments = pathname.split('/').filter(Boolean)

    // If first segment is a locale, remove it
    if (segments[0] === locale) {
      segments.shift()
    }

    // Construct new path with new locale
    const pathWithoutLocale = segments.length > 0 ? `/${segments.join('/')}` : ''
    const newPath = `/${otherLocale}${pathWithoutLocale}`

    router.push(newPath)
  }

  return (
    <button onClick={handleLocaleSwitch} className={cn('w-max', className)}>
      {t('switchLocale')}
    </button>
  )
}

export default LocaleSwitcher
