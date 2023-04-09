import classNames from 'classnames';
import {FC} from 'react';
import {BsPersonPlusFill} from 'react-icons/bs';

import useAuth from '@/hooks/useAuth';

import {useGetProfileQuery, useSubscribeToChannelMutation} from '@/store/api/api';

import {IUser} from '@/types/user.interface';

import classes from './SubscribeButton.module.scss';

interface ISubscribeButton {
  toChannel: IUser;
}

const SubscribeButton: FC<ISubscribeButton> = ({toChannel}) => {
  const {user} = useAuth();

  const {data} = useGetProfileQuery(null, {
    skip: !user,
  });

  const [subscribe, {isLoading}] = useSubscribeToChannelMutation();

  if (user?.id === toChannel.id || !user) return null;

  const isSub = data?.subscriptions?.find(sub => sub.toChannel.id === toChannel.id);

  return (
    <button
      className={classNames(classes.root, isSub && classes.subscribed)}
      disabled={isLoading}
      onClick={() => subscribe(toChannel.id)}
    >
      <BsPersonPlusFill />
      <span>{isSub ? 'Вы подрисаны' : 'Подписаться'}</span>
    </button>
  );
};

export default SubscribeButton;
