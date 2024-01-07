import Image from 'next/image'

const page = () => {
  const members = [
    {
      imagePath: '/images/member/keishi-tomiya.png',
      displayName: 'トミヤ ケイシ',
      description: (
        <p>
          1990年福岡県生まれ。デザイナー。
          <br />
          多摩美術大学プロダクトデザイン専攻卒業後、TOTO株式会社デザイン本部入社。
          <br />
          海外用水栓金具やシャワー、国内パブリック商品を数多くデザイン。
          <br />
          その後、日本のデザイン会社勤務後、2023年トミヤリョウジと共にdesign studio toを設立。
          <br />
          過去にreddot design award、reddot design award best of the bestなど受賞。
        </p>
      ),
    },
    {
      imagePath: '/images/member/ryoji-tomiya.png',
      displayName: 'トミヤ リョウジ',
      description: (
        <p>
          1993年福岡県生まれ。プロデューサー。
          <br />
          2017年 九州大学法学部卒業。 同年 大手広告代理店入社。
          <br />
          飲料、医薬品、人材、家電メーカー、PCメーカーなど多種多様な業種の広告コミュニケーションのプロジェクトを進行。
          <br />
          TVCM制作、グラフィック制作、キャンペーン設計などの制作業務から、TVCM出稿、デジタル広告運用、SEO施策などのメディア業務まで幅広く経験。
          <br />
          2023年 トミヤケイシと共にdesign studio toを設立。
        </p>
      ),
    },
  ]
  return (
    <div>
      <p className="pt-40 pb-64">
        福岡と東京を拠点に活動するデザイン事務所です。生活の中での瞬間に垣間見える無意識な仕草や心理、時には人の怠惰さを許容することで見えてくるもの。私たちがデザインする上で大切にしていることは、人々の生活を観察する先に見えてくる新しい価値を見つけ、ユーザーに浸透していく形まで磨き上げ、洗練させながら、具現化することです。
        また、私たちはデザイナーであるとともに、ひとりの生活者であるということを大切にしています。作り手の視点のみでなく、実際に触れるユーザーの目線で物事を眺め、デザインに向き合います。それらの多角的な視点で考え抜いた提案を通して、忖度なく意見をぶつけ合うことのできるパートナーとして併走します。
      </p>

      {/* Member */}
      <section className="pb-40">
        <h1 className="text-base pb-16">Member</h1>
        <div className="space-y-20">
          {members.map((member) => (
            <div key={member.displayName} className="flex items-end gap-x-20">
              <Image src={member.imagePath} alt={`${member.displayName}のプロフィール写真`} width={300} height={350} />
              <div className="space-y-6">
                <p>{member.displayName}</p>
                {member.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="pb-8">
        <h1 className="text-base pb-16">Awards</h1>
        <p>
          reddot design award 2020
          <br />
          JCD product of the year 2020
          <br />
          reddot design award 2019
          <br />
          reddot design award 2018
          <br />
          reddot design award 2017 best of the best
          <br />
          reddot design award 2017
          <br />
          MITSUBISHI CHEMICAL JUNIOR DESIGNER AWARD 2014
          <br />
          KONICA MINOLTA ソーシャルデザインアワード2015
        </p>
      </section>
    </div>
  )
}

export default page
