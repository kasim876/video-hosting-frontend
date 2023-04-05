import {FC} from 'react';

import VideoItem from '@/components/shared/video-item/VideoItem';
import Input from '@/components/ui/input/Input';

import classes from './Search.module.scss';
import useSearch from './useSearch';

const SearchForm: FC = () => {
  const {handleSearch, searchQuery, videos, isSuccess} = useSearch();

  return (
    <div className={classes.root}>
      <form>
        <Input
          type="text"
          value={searchQuery}
          placeholder="Поиск"
          onChange={handleSearch}
        />
      </form>
      {isSuccess && (
        <div className={classes.result}>
          {videos?.length ? (
            videos.map(video => (
              <VideoItem
                video={video}
                isSmall={true}
                key={video.id}
              />
            ))
          ) : (
            <div className="text-white">Видео не найдены</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchForm;
