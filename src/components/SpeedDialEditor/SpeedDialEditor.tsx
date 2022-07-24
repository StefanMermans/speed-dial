import React, {Dispatch, useEffect, useState} from 'react';

import {gql} from 'graphql-request';
import {useNavigate} from 'react-router-dom';

import {SiteItem} from './SiteItem';
import {Button} from '../Form/Button';
import {Site} from '../../models/Site';
import {client} from '../../gqlClient';
import {DeleteModal} from './DeleteModal';
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
  const navigate = useNavigate();
  const [deleteIndex, setDeleteIndex] = useState<number>(-1);

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

  const handleCancel = () => {
    navigate('/');
  };

  const handleSiteChange = (index: number, editedSite: Site) => {
    const newSites = sites.slice();
    newSites[index] = editedSite;

    setSites(newSites);
  };

  const handleAddSite = () => {
    const newSites = sites.slice();
    newSites.unshift({
      url: '',
      icon: '',
      name: '',
      backgroundColor: '#ffffff',
    });

    setSites(newSites);
  };

  const handleDelete = (index: number) => {
    setDeleteIndex(index);
  };

  const handleCloseModal = () => {
    setDeleteIndex(-1);
  };

  const handleConfirmDelete = () => {
    const newSites = sites.slice();
    newSites.splice(deleteIndex, 1);

    setSites(newSites);
    setDeleteIndex(-1);
  };

  return (
    <div>
      <Button variant='primary' onClick={handleAddSite}>
        Add
      </Button>
      <div className='flex gap-4 flex-col mb-4 mt-4'>
        {sites.map((site, index) => (
          <SiteItem
            site={site}
            index={index}
            key={site.url}
            onDelete={handleDelete}
            onChange={handleSiteChange}
          />
        ))}
      </div>
      <div className='flex gap-4'>
        <Button onClick={handleSave} variant='primary'>
          Save
        </Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </div>
      <DeleteModal
        onConfirm={handleConfirmDelete}
        onCancel={handleCloseModal}
        site={sites[deleteIndex] ?? undefined}
      />
    </div>
  );
};
