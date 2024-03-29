import {FC, useState} from 'react';

import useAuth from '@/hooks/useAuth';
import useOutside from '@/hooks/useOutside';

import AuthButtons from '../auth-buttons/AuthButtons';
import AuthForm from '../auth-form/AuthForm';
import Profile from '../profile/Profile';
import UploadVideo from '../upload-video/UploadVideo';

const RightIcons: FC = () => {
  const [type, setType] = useState<'register' | 'login'>('login');

  const {ref, isShow, setIsShow} = useOutside(false);

  const {user} = useAuth();

  if (user)
    return (
      <div className="flex items-center">
        <UploadVideo />
        <Profile />
      </div>
    );

  return (
    <div>
      <AuthButtons
        setType={setType}
        setIsShow={setIsShow}
      />
      {isShow && (
        <AuthForm
          setIsShow={setIsShow}
          type={type}
          ref={ref}
        />
      )}
    </div>
  );
};

export default RightIcons;
