'use client'
import { mainHeight } from '@/components/styles'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa6'
import { notoSans } from '../../../lib/font'
import { blur } from '../../../components/styles'
import { cn } from '@/lib/utils'

interface AboutPageProps {
  params: {
    locale: 'en' | 'ja'
  }
}

const AboutPage: React.FC<AboutPageProps> = ({ params: { locale } }) => {
  const t = useTranslations('About')
  const members = [
    {
      imagePath: '/images/member/keishi-tomiya.png',
      displayName: t('keishiName'),
      description: t.raw('keishiDesc'),
      instagram: 'https://www.instagram.com/keishitomiya',
    },
    // {
    //   imagePath: '/images/member/ryoji-tomiya.png',
    //   displayName: t('ryojiName'),
    //   description: t.raw('ryojiDesc'),
    //   instagram: 'https://www.instagram.com/tomiji_sol',
    // },
  ]
  return (
    <div className="px-5 sm:px-10 lg:pl-0 lg:pr-40">
      {/* Hero */}
      <section className={cn('flex items-center', mainHeight)}>
        <div
          className={`${locale === 'ja' ? 'md:leading-9' : 'md:leading-7'} leading-5 tracking-wider`}
          dangerouslySetInnerHTML={{ __html: t.raw('hero') }}
        />
      </section>

      {/* Designer */}
      <section className="pb-20 sm:pb-40 mt-20">
        <h1 className={cn('text-base sm:text-xl pb-9 sm:pb-[74px] text-center lg:text-left', notoSans.className)}>
          Designer
        </h1>
        <div className="space-y-[50px] sm:space-y-20">
          {members.map((member) => (
            <div key={member.displayName} className="flex flex-col sm:flex-row sm:items-start sm:gap-x-20">
              {/* Image */}
              <div className="relative h-auto w-1/2 sm:w-auto sm:min-w-[300px] sm:max-w-56">
                <Image
                  src={member.imagePath}
                  alt={`${member.displayName}のプロフィール写真`}
                  width={300}
                  height={400}
                  className="object-cover"
                />
              </div>

              <div className="space-y-6 pt-8 sm:pt-0">
                <p>{member.displayName}</p>
                <div dangerouslySetInnerHTML={{ __html: member.description }} />
                <div className="flex flex-col underline">
                  {member.instagram && (
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className={cn('w-max', blur)}>
                      <FaInstagram size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="pb-20 sm:pb-32 lg:pb-40">
        <h1 className={cn('text-base sm:text-xl pb-9 sm:pb-[74px] text-center lg:text-left', notoSans.className)}>
          Awards
        </h1>
        <div dangerouslySetInnerHTML={{ __html: t.raw('awards') }} />
      </section>
    </div>
  )
}

export default AboutPage
