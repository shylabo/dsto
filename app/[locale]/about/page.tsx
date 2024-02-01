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
      note: undefined,
      instagram: 'https://www.instagram.com/keishitomiya',
    },
    {
      imagePath: '/images/member/ryoji-tomiya.png',
      displayName: t('ryojiName'),
      description: t.raw('ryojiDesc'),
      note: 'https://note.com/tomiji_sol',
      instagram: 'https://www.instagram.com/tomiji_sol',
    },
  ]
  return (
    <>
      {/* Hero */}
      <section className="flex items-center min-h-[calc(100vh-75px)] lg:min-h-screen px-4 lg:px-0">
        <div className="leading-5 md:leading-9 tracking-wider" dangerouslySetInnerHTML={{ __html: t.raw('hero') }} />
      </section>

      {/* Member */}
      <section className="pb-40">
        <h1 className="text-base pb-10 lg:pb-20 pl-4 lg:pl-0 text-center lg:text-left">Member</h1>
        <div className="space-y-20">
          {members.map((member) => (
            <div key={member.displayName} className="flex flex-col lg:flex-row lg:items-end lg:gap-x-20">
              {/* Image */}
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
                <div className="flex flex-col underline">
                  {member.note && (
                    <a href={member.note} target="_blank" rel="noopener noreferrer">
                      note
                    </a>
                  )}
                  {member.instagram && (
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="pb-20 sm:pb-32 lg:pb-40 pl-4 md:pl-0">
        <h1 className="text-base pb-10 lg:pb-20 text-center lg:text-left">Awards</h1>
        <div dangerouslySetInnerHTML={{ __html: t.raw('awards') }} />
      </section>
    </>
  )
}

export default AboutPage
