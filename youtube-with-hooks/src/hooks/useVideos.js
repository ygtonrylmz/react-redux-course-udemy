import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const KEY = 'AIzaSyDnbGFMDKHFEwOtqChqoKodN4ETZH8zih4';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Default
    seach(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const seach = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, seach];
};

export default useVideos;
