interface NotFoundProps {
  locale: string
}

const NotFound: React.FC<NotFoundProps> = ({ locale }) => {
  const message = locale === 'ja' ? 'お探しの記事は見つかりませんでした' : 'Not found'
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100dvh-92px)] sm:h-[calc(100dvh-130px)] lg:h-screen lg:-ml-[330px] pb-[92px] sm:pb-[130px] lg:pb-0">
      <p>404 | {message}</p>
    </div>
  )
}

export default NotFound
