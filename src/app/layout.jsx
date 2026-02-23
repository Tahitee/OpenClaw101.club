/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  metadataBase: new URL('https://openclaw101.club'),
  title: {
    default: 'OpenClaw101 - OpenClaw 中文教程',
    template: '%s - OpenClaw101'
  },
  description: 'OpenClaw101 是一个全面的 OpenClaw 中文教程网站，帮助你从零开始掌握 OpenClaw AI 助手框架。',
  applicationName: 'OpenClaw101',
  generator: 'Next.js',
  appleWebApp: {
    title: 'OpenClaw101'
  },
  twitter: {
    site: 'https://openclaw101.club'
  }
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
          🦞 OpenClaw101
        </span>
      }
      projectLink="https://github.com/Tahitee/OpenClaw101.club"
    />
  )
  const pageMap = await getPageMap()
  return (
    <html lang="zh" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="🦞" />
      <body>
        <Layout
          navbar={navbar}
          footer={
            <Footer>
              <div style={{ textAlign: 'center' }}>
                © {new Date().getFullYear()} OpenClaw101. 基于{' '}
                <a href="https://nextra.site" target="_blank" rel="noopener noreferrer">
                  Nextra
                </a>{' '}
                构建。
              </div>
            </Footer>
          }
          editLink="在 GitHub 上编辑此页"
          docsRepositoryBase="https://github.com/Tahitee/OpenClaw101.club/blob/main"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
