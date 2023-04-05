import {ChangeEvent, useState} from 'react';

import useDelay from '@/hooks/useDelay';

import {useGetVideoBySearchQuery} from '@/store/api/video.api';

const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const delaySearch = useDelay(searchQuery, 500);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const {data: videos, isSuccess} = useGetVideoBySearchQuery(delaySearch, {
    skip: !delaySearch,
    selectFromResult: ({data, ...rest}) => ({
      data: data?.slice(0, 2),
      ...rest,
    }),
  });

  return {
    handleSearch,
    videos,
    searchQuery,
    isSuccess,
  };
};

export default useSearch;
