import {useEffect, useMemo, useState} from 'react';

const BASE_URL = process.env.REACT_APP_ANILIST_URL ?? '';

export default function useAnilistRequest(
  query: string,
  variables: any = null,
  initialValue = [],
): [any, boolean] {
  const [data, setData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(true);

  const body = useMemo(() => {
    if (variables) {
      return JSON.stringify({query, variables});
    }

    return JSON.stringify({query});
  }, [query, variables]);

  useEffect(() => {
    fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body,
    })
      .then(async (response: Response) => {
        const json = await response.json();
        return response.ok ? json : Promise.reject(json);
      })
      .then((data: any) => {
        setData(data.data);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        setIsLoading(false);
        console.error(error);
        alert('error during anilist request!');
      });
  }, [body]);

  return [data, isLoading];
}
