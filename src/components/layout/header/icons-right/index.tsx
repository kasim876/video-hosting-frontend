import React, {FC} from 'react';

import ProfileMenu from '@components/layout/header/profile-menu';

const IconsRight: FC = () => {
  const isAuth: boolean = true;

  if (!isAuth) {
    return null;
  }

  return <ProfileMenu />;
};

export default IconsRight;
