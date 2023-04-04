import {GetServerSideProps, NextPage} from 'next';

import Channel from '@/components/screens/channel/Channel';

import {IUser} from '@/types/user.interface';

import UserService from '@/services/user.service';

const ChannelPage: NextPage<{user: IUser}> = ({user}) => {
  return <Channel user={user} />;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const user = await UserService.getOne(Number(context.query?.id));

  return {
    props: {
      user,
    },
  };
};

export default ChannelPage;
