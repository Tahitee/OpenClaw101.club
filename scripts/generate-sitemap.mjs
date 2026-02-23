#!/usr/bin/env node
/**
 * generate-sitemap.mjs
 * Scans src/content/ for .mdx files and generates sitemap.xml
 * Outputs to out/sitemap.xml (post-build) and public/sitemap.xml (backup)
 */

import { readdirSync, statSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join, relative, basename, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const CONTENT_DIR = join(ROOT, 'src', 'content')
const SITE_URL = 'https://openclaw101.club'

function getAllMdxFiles(dir, files = []) {
  const entries = readdirSync(dir)
  for (const entry of entries) {
    const fullPath = join(dir, entry)
    const stat = statSync(fullPath)
    if (stat.isDirectory()) {
      getAllMdxFiles(fullPath, files)
    } else if (entry.endsWith('.mdx') && !entry.startsWith('_')) {
      files.push(fullPath)
    }
  }
  return files
}

function mdxPathToUrl(filePath) {
  let rel = relative(CONTENT_DIR, filePath)
  // Remove .mdx extension
  rel = rel.replace(/\.mdx$/, '')
  // index.mdx maps to the directory root
  if (rel === 'index') {
    return '/docs'
  }
  if (rel.endsWith('/index')) {
    rel = rel.slice(0, -6)
  }
  return `/docs/${rel}`
}

const today = new Date().toISOString().split('T')[0]

// Collect all URLs
const urls = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/docs', priority: '0.9', changefreq: 'weekly' },
]

const mdxFiles = getAllMdxFiles(CONTENT_DIR)
for (const file of mdxFiles) {
  const url = mdxPathToUrl(file)
  // Skip if already added (e.g. /docs from index.mdx)
  if (urls.some(u => u.loc === url)) continue

  // Determine priority based on depth
  const depth = url.split('/').length - 2
  let priority = '0.8'
  if (depth >= 2) priority = '0.7'
  if (depth >= 3) priority = '0.6'

  urls.push({ loc: url, priority, changefreq: 'monthly' })
}

// Generate XML
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${SITE_URL}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`

// Write to out/ directory (post-build)
const outDir = join(ROOT, 'out')
if (existsSync(outDir)) {
  writeFileSync(join(outDir, 'sitemap.xml'), xml)
  console.log(`✅ Sitemap written to out/sitemap.xml (${urls.length} URLs)`)
}

// Also write to public/ as backup
writeFileSync(join(ROOT, 'public', 'sitemap.xml'), xml)
console.log(`✅ Sitemap written to public/sitemap.xml (${urls.length} URLs)`)
