import {FC} from 'react';

import {IComment} from '@/types/comment.interface';

import {UserAvatar} from '../../../../components/UserAvatar';

import classes from './Comments.module.scss';

export const CommentItem: FC<{comment: IComment}> = ({comment}) => {
  return (
    <div className={classes.commentItem}>
      <UserAvatar
        userId={comment.user.id}
        userAvatar={comment.user.avatarPath}
      />
      <div>
        <div className={classes.author}>{comment.user.name}</div>
        <div className={classes.message}>{comment.message}</div>
      </div>
    </div>
  );
};
