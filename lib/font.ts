import { Noto_Sans, Noto_Sans_JP } from 'next/font/google'

export const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap',
})

export const notoSans = Noto_Sans({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap',
})
