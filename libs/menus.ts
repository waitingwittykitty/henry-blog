import { pagesPath } from './$path';

export type MenuItemFragment = {
  __typename?: 'MenuItem';
  id: string;
  name: string;
  url?: string | null;
  translation?: {
    __typename?: 'MenuItemTranslation';
    id: string;
    name: string;
  } | null;
  category?: { __typename?: 'Category'; id: string; slug: string } | null;
  collection?: { __typename?: 'Collection'; id: string; slug: string } | null;
  page?: { __typename?: 'Page'; id: string; slug: string } | null;
};

export const getLinkPath = (item: MenuItemFragment) => {
  const paths = pagesPath;

  if (item.category) {
    return paths.category._slug(item.category?.slug).$url();
  }
  if (item.collection) {
    return paths.collection._slug(item.collection?.slug).$url();
  }
  if (item.page) {
    return paths.page._slug(item.page?.slug).$url();
  }

  return paths.$url();
};

export default getLinkPath;
