import type { OptionalQuery as OptionalQuery0 } from "@/pages/account/login";
import type { OptionalQuery as OptionalQuery1 } from "@/pages/posts/[slug]";

export const pagesPath = {
  $404: {
    $url: (url?: { hash?: string }) => ({
      pathname: "/404" as const,
      hash: url?.hash,
    }),
  },
  _sitemap: (sitemap: string | number) => ({
    $url: (url?: { hash?: string }) => ({
      pathname: "/[sitemap]" as const,
      query: { sitemap },
      hash: url?.hash,
    }),
  }),
  account: {
    login: {
      $url: (url?: { query?: OptionalQuery0; hash?: string }) => ({
        pathname: "/account/login" as const,
        query: { ...url?.query },
        hash: url?.hash,
      }),
    },
    preferences: {
      $url: (url?: { hash?: string }) => ({
        pathname: "/account/preferences" as const,
        hash: url?.hash,
      }),
    },
    register: {
      $url: (url?: { hash?: string }) => ({
        pathname: "/account/register" as const,
        hash: url?.hash,
      }),
    },
  },
  category: {
    _slug: (slug: string | number) => ({
      $url: (url?: { hash?: string }) => ({
        pathname: "/category/[slug]" as const,
        query: { slug },
        hash: url?.hash,
      }),
    }),
  },
  collection: {
    _slug: (slug: string | number) => ({
      $url: (url?: { hash?: string }) => ({
        pathname: "/collection/[slug]" as const,
        query: { slug },
        hash: url?.hash,
      }),
    }),
  },
  page: {
    _slug: (slug: string | number) => ({
      $url: (url?: { hash?: string }) => ({
        pathname: "/page/[slug]" as const,
        query: { slug },
        hash: url?.hash,
      }),
    }),
  },
  posts: {
    _slug: (slug: string | number) => ({
      $url: (url?: { query?: OptionalQuery1; hash?: string }) => ({
        pathname: "/posts/[slug]" as const,
        query: { slug, ...url?.query },
        hash: url?.hash,
      }),
    }),
  },
  search: {
    $url: (url?: { hash?: string }) => ({
      pathname: "/search" as const,
      hash: url?.hash,
    }),
  },
  $url: (url?: { hash?: string }) => ({
    pathname: "/" as const,
    hash: url?.hash,
  }),
};

export type PagesPath = typeof pagesPath;
