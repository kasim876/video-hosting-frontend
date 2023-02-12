import React, {FC} from 'react';

import AuthForm from '@components/layout/header/auth-form';
import ProfileMenu from '@components/layout/header/profile-menu';

const IconsRight: FC = () => {
  const isAuth: boolean = false;

  if (!isAuth) {
    return <AuthForm />;
  }

  return <ProfileMenu />;
};

export default IconsRight;
