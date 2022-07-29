export type MenuItemFragment = {
  __typename?: 'MenuItem';
  id: string;
  name: string;
  url?: string | null;
  path?: string;
  children?: MenuItemFragment[];
};
