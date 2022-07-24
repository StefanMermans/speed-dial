import {useState, useEffect} from 'react';

import {gql} from 'graphql-request';
import {useNavigate} from 'react-router-dom';

import {client} from '../gqlClient';
import {Site} from '../models/Site';

const sortSites = (sites: Site[]): Site[] => {
  return sites.sort((a, b) => {
    return (a.index ?? 99999) - (b.index ?? 99999);
  });
};

export default function useSiteList(): Site[] {
  const [sites, setSites] = useState<Site[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      client
        .request(
          gql`
            query {
              sites {
                name
                url
                backgroundColor
                icon
                index
              }
            }
          `,
          {},
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        )
        .then((data) => setSites(sortSites(data.sites)))
        .catch(() => {
          navigate('/login');
        });
    } catch (error) {
      navigate('/login');
    }
  }, [navigate]);

  return sites;
}
