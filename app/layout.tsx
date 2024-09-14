import { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'design studio to',
  description: '日本を拠点に活動するデザイン事務所 design studio to のウェブサイトです。',
  keywords: ['design studio to', 'tomiya keishi', 'トミヤ ケイシ'],
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return children
}

export default RootLayout
