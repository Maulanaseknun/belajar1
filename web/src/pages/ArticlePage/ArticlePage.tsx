import ArticleCell from 'src/components/ArticleCell'
import { MetaTags } from '@redwoodjs/web'

interface Props {
  id: number
}

const ArticlePage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <ArticleCell id={id} />
    </>
  )
}

export default ArticlePage
