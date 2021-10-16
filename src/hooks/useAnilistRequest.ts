import { useEffect, useMemo, useState } from "react";

const BASE_URL = process.env.REACT_APP_ANILIST_URL ?? '';

export default function useAnilistRequest(query: string, variables: any = null, initialValue = []): [any, boolean] {
  const [data, setData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(true);

  const body = useMemo(() => {
    if (variables) {
      return JSON.stringify({query, variables});
    }

    return JSON.stringify({query});
  }, [query, variables]);

  useEffect(() => {
    function handleResponse(response: Response) {
      return response.json().then(function (json) {
          return response.ok ? json : Promise.reject(json);
      });
    }
    
    function handleData(data: any) {
      setData(data.data);
      setIsLoading(false);
    }
    
    function handleError(error: Error) {
      setIsLoading(false);
      console.error(error);
      alert("error during anilist request!");
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body
    }

    fetch(BASE_URL, options)
      .then(handleResponse)
      .then(handleData)
      .catch(handleError);
  }, [body]);

  return [data, isLoading];
}
