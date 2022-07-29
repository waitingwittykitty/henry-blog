import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Posts from '@/pages/posts';
import { FeedDocument } from '@/api';
import mockedPosts from '../assets/mocks/posts.mocks.json';

export default {
  title: 'Pages/Posts',
  component: Posts,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Posts>;

const Template: ComponentStory<typeof Posts> = () => <Posts />;

export const NoPosts = Template.bind({});
NoPosts.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: FeedDocument,
        },
        result: {
          data: {
            feed: [],
          },
        },
      },
    ],
    addTypename: false,
    defaultOptions: { watchQuery: { fetchPolicy: 'no-cache' } },
  },
};

export const ManyPosts = Template.bind({});
ManyPosts.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: FeedDocument,
        },
        result: {
          data: {
            feed: mockedPosts,
          },
        },
      },
    ],
    addTypename: false,
    defaultOptions: { watchQuery: { fetchPolicy: 'no-cache' } },
  },
};
