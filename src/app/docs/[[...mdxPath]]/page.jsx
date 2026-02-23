import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../../../mdx-components'
import Giscus from '../../../components/Giscus'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  return {
    ...metadata,
    title: metadata.title ? `${metadata.title} - OpenClaw101` : 'OpenClaw101 - OpenClaw 中文教程'
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
