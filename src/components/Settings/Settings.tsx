import React, {Dispatch, useEffect, useState} from 'react';

import {gql} from 'graphql-request';

import {Button} from '../Form/Button';
import {client} from '../../gqlClient';
import {getAuthHeader} from '../../utils/utils';
import useSiteList from '../../hooks/useSiteList';

const useSitesJson = (): [string, Dispatch<string>] => {
  const [sitesJson, setSitesJson] = useState('[]');
  const sites = useSiteList();

  useEffect(() => {
    setSitesJson(JSON.stringify(sites));
  }, [sites]);

  return [sitesJson, setSitesJson];
};

export const Settings = () => {
  const [sitesJson, setSitesJson] = useSitesJson();

  const handleSave = () => {
    client.request(
      gql`
        mutation UpdateSites($sites: String!) {
          updateSites(sites: $sites) {
            name
          }
        }
      `,
      {sites: sitesJson},
      getAuthHeader(),
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSitesJson(event.target.value);
  };

  return (
    <div className='page items-start'>
      <div className='page-content'>
        <textarea value={sitesJson} onChange={handleChange} />
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
};
