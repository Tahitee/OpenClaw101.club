import nextra from 'nextra'

const withNextra = nextra({
  search: {
    codeblocks: false
  },
  contentDirBasePath: '/docs'
})

export default withNextra({
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  }
})
