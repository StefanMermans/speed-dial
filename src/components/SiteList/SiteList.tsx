import React from 'react';

import {Site} from '../Site/Site';
import useSiteList from '../../hooks/useSiteList';

export const BOOKMARK_WIDTH = 96 + 16;

interface props {
  padding: number;
}

export const SiteList: React.FC<props> = ({padding}) => {
  const sites = useSiteList();

  return (
    <div className='flex flex-wrap gap-4 pt-8' style={{paddingLeft: padding}}>
      {sites.map((site) => (
        <Site key={site.name} site={site} />
      ))}
    </div>
  );
};
