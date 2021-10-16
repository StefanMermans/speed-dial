import React, {Dispatch, useEffect, useState} from 'react';

import {gql} from 'graphql-request';

import {SiteItem} from './SiteItem';
import {Button} from '../Form/Button';
import {Site} from '../../models/Site';
import {client} from '../../gqlClient';
import {getAuthHeader} from '../../utils/utils';
import useSiteList from '../../hooks/useSiteList';

interface props {}

type SetSites = (sites: Site[]) => void;

const useSitesJson = (): [string, Dispatch<string>] => {
  const [sitesJson, setSitesJson] = useState('[]');
  const sites = useSiteList();

  useEffect(() => {
    setSitesJson(JSON.stringify(sites));
  }, [sites]);

  return [sitesJson, setSitesJson];
};

const useSites = (): [Site[], SetSites] => {
  const [sitesJson, setSitesJson] = useSitesJson();

  const handleSitesChanged = (sites: Site[]) => {
    setSitesJson(JSON.stringify(sites));
  };

  return [JSON.parse(sitesJson), handleSitesChanged];
};

export const SpeedDialEditor: React.FC<props> = () => {
  const [sites, setSites] = useSites();

  const handleSave = () => {
    client.request(
      gql`
        mutation UpdateSites($sites: String!) {
          updateSites(sites: $sites) {
            name
          }
        }
      `,
      {sites: JSON.stringify(sites)},
      getAuthHeader(),
    );
  };

  const handleSiteChange = (index: number, editedSite: Site) => {
    const newSites = sites.slice();
    newSites[index] = editedSite;
    setSites(newSites);
  };

  return (
    <div>
      <div className='flex gap-4 flex-col mb-4'>
        {sites.map((site, index) => (
          <SiteItem
            site={site}
            index={index}
            key={site.url}
            onChange={handleSiteChange}
          />
        ))}
      </div>
      <Button onClick={handleSave} variant='primary'>
        Save
      </Button>
    </div>
  );
};
