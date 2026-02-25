import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../../../mdx-components'
import Giscus from '../../../components/Giscus'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  const title = metadata.title ? `${metadata.title} - OpenClaw101` : 'OpenClaw101 - OpenClaw 中文教程'
  const description = metadata.description || '从零开始掌握 OpenClaw AI 助手框架。25+ 篇中文教程，覆盖安装部署、多渠道接入、进阶配置、实战案例。'
  const slug = Array.isArray(params.mdxPath) ? params.mdxPath.join('/') : (params.mdxPath || '')
  const url = slug ? `https://openclaw101.club/docs/${slug}/` : 'https://openclaw101.club/docs/'
  return {
    ...metadata,
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      locale: 'zh_CN',
      url,
      siteName: 'OpenClaw101',
      title,
      description,
      images: [
        {
          url: 'https://openclaw101.club/og-image.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://openclaw101.club/og-image.png'],
    },
  }
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props) {
  const params = await props.params
  const {
    default: MDXContent,
    toc,
    metadata,
  } = await importPage(params.mdxPath)
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
      <Giscus />
    </Wrapper>
  )
}
