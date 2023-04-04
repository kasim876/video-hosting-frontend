import {FC} from 'react';

import useAuth from '@/hooks/useAuth';

import {IComment} from '@/types/comment.interface';
import {IVideo} from '@/types/video.interface';

import AddCommentForm from './AddCommentForm';
import CommentItem from './CommentItem';
import classes from './Comments.module.scss';

const Comments: FC<{video: IVideo}> = ({video}) => {
  const {user} = useAuth();

  return (
    <div className={classes.comments}>
      <h2>Комментарии</h2>
      <div className={classes.line} />
      {video.comments.length ? (
        <div className={classes.grid}>
          {video.comments.map(comment => (
            <CommentItem
              comment={comment}
              key={comment.id}
            />
          ))}
        </div>
      ) : (
        <p>Комментарии не найдены!</p>
      )}
      <div className={classes.bottomForm}>{user && <AddCommentForm videoId={video.id} />}</div>
    </div>
  );
};

export default Comments;
