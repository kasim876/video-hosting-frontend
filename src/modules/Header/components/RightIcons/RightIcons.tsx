import {FC, useState} from 'react';

import {useAuth} from '@hooks/useAuth';
import useOutside from '@hooks/useOutside';

import AuthButtons from '../AuthButtons/AuthButtons';
import {AuthForm} from '../AuthForm/AuthForm';
import {Profile} from '../Profile/Profile';

export const RightIcons: FC = () => {
  const [type, setType] = useState<'register' | 'login'>('login');

  const {ref, isShow, setIsShow} = useOutside(false);

  const {user} = useAuth();

  if (!user) {
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
  }

  return (
    <Profile
      username={user.name}
      avatarPath={user.avatarPath || ''}
    />
  );
};
