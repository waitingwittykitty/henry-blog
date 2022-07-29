import React from 'react';

import NoDataIcon from '@/components/icons/nodata-icon.svg';

export interface NoDataProps {
  caption?: string;
}

function NoData({ caption = 'No Data' }: NoDataProps) {
  return (
    <div className="my-8 text-black/40">
      <NoDataIcon className="mx-auto" />

      <p className="text-center">{caption}</p>
    </div>
  );
}

export default NoData;
