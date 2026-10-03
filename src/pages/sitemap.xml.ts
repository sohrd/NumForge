import type { APIRoute } from 'astro';
import { ALL_TOOLS } from '../data/allTools';
import { CATEGORIES } from '../data/categories';
import { ARTICLES } from '../data/articles';

export const GET: APIRoute = () => {
  const baseUrl = 'https://numforge.online';
  const now = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: `${baseUrl}/`, priority: '1.0', changefreq: 'weekly' },
    { url: `${baseUrl}/tools/`, priority: '0.9', changefreq: 'weekly' },
    { url: `${baseUrl}/learn/`, priority: '0.9', changefreq: 'weekly' },
    { url: `${baseUrl}/about/`, priority: '0.6', changefreq: 'monthly' },
    { url: `${baseUrl}/contact/`, priority: '0.6', changefreq: 'monthly' },
    { url: `${baseUrl}/privacy/`, priority: '0.4', changefreq: 'yearly' },
    { url: `${baseUrl}/terms/`, priority: '0.4', changefreq: 'yearly' },
  ];

  const categoryPages = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/tools/${cat.slug}/`,
    priority: '0.8',
    changefreq: 'weekly'
  }));

  const articlePages = ARTICLES.map((art) => ({
    url: `${baseUrl}/learn/${art.slug}/`,
    priority: '0.8',
    changefreq: 'monthly'
  }));

  const toolPages = ALL_TOOLS.map((tool) => ({
    url: `${baseUrl}/${tool.slug}/`,
    priority: '0.8',
    changefreq: 'monthly'
  }));

  const allUrls = [...staticPages, ...categoryPages, ...articlePages, ...toolPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
