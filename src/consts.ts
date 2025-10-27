import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: '',
  description:
    'Apersonal space where  I share my thoughts on novels, manga, webtoons, comics, games, music—from underground gems to mainstream hits—and all things art. Written in both English and Indonesian.',
  href: 'https://nopal.site',
  author: 'novalattasya',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/novalattasya',
    label: 'GitHub',
  },
  {
    href: 'https://instagram.com/5nopal',
    label: 'Instagram',
  },
  {
    href: 'mailto:mochammadnopalattasya@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Instagram: 'lucide:instagram',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
