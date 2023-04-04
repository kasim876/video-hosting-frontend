import {FC} from 'react';

import ChannelInfo from '@/components/shared/channel-info/ChannelInfo';
import UserAvatar from '@/components/shared/user-avatar/UserAvatar';

import {IComment} from '@/types/comment.interface';

import classes from './Comments.module.scss';

const CommentItem: FC<{comment: IComment}> = ({comment}) => {
  return (
    <div className={classes.commentItem}>
      <ChannelInfo
        user={comment.user}
        message={comment.message}
      />
    </div>
  );
};

export default CommentItem;
