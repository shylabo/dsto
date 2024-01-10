import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'design studio to',
  description:
    '日本を拠点に活動するデザイン事務所です。生活の中での瞬間に垣間見える無意識下の仕草や心理、時には人の怠惰さを許容することで見えてくるもの。私たちのデザインが大切にしていることは、人々の生活を観察する先に見えてくる新しい価値を見つけ、誰もに浸透していく形まで磨き上げ洗練させながら、具現化することです。また、私たちはデザイナーであるとともに、ひとりの生活者であるということを大切にしています。作り手の視点のみでなく、実際に触れるユーザーの目線で物事を眺め、デザインに向き合います。 それらの多角的な視点で考え抜いた提案を通して、忖度なく意見をぶつけ合うことのできるパートナーとして併走します。',
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return children
}

export default RootLayout
