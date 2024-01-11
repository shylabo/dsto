'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const AboutPage = () => {
  const t = useTranslations('About')
  const members = [
    {
      imagePath: '/images/member/keishi-tomiya.png',
      displayName: t('keishiName'),
      description: t.raw('keishiDesc'),
    },
    {
      imagePath: '/images/member/ryoji-tomiya.png',
      displayName: t('ryojiName'),
      description: t.raw('ryojiDesc'),
    },
  ]
  return (
    <div>
      <div className="px-4 pt-20 pb-64 md:px-0 md:pt-40" dangerouslySetInnerHTML={{ __html: t.raw('hero') }} />

      {/* Member */}
      <section className="pb-40">
        <h1 className="text-base pb-16 pl-4 md:pl-0 text-center md:text-left">Member</h1>
        <div className="space-y-20">
          {members.map((member) => (
            <div key={member.displayName} className="flex flex-col lg:flex-row lg:items-end lg:gap-x-20">
              <div className="relative h-[560px] min-w-[300px] lg:h-[350px]">
                <Image
                  src={member.imagePath}
                  alt={`${member.displayName}のプロフィール写真`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6 px-4 pt-8 lg:p-0">
                <p>{member.displayName}</p>
                <div dangerouslySetInnerHTML={{ __html: member.description }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="pb-8 pl-4 md:pl-0">
        <h1 className="text-base pb-16 text-center md:text-left">Awards</h1>
        <div dangerouslySetInnerHTML={{ __html: t.raw('awards') }} />
      </section>
    </div>
  )
}

export default AboutPage