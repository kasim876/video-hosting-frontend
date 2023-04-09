import {FC} from 'react';
import {HiUpload} from 'react-icons/hi';

import useOutside from '@/hooks/useOutside';

import UploadModal from './UploadModal';

const UploadVideo: FC = () => {
  const {isShow, ref, setIsShow} = useOutside(false);

  return (
    <>
      <button
        onClick={() => {
          setIsShow(!isShow);
        }}
        className="text-2xl mr-4"
      >
        <HiUpload />
      </button>

      {isShow && (
        <UploadModal
          isShow={isShow}
          setIsShow={setIsShow}
          ref={ref}
        />
      )}
    </>
  );
};

export default UploadVideo;
