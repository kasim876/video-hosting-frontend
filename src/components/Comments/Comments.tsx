import {FC} from 'react';

import {useAuth} from '@/hooks/useAuth';
import {IComment} from '@/types/comment.interface';

import {AddCommentForm} from './AddCommentForm';
import {CommentItem} from './CommentItem';
import classes from './Comments.module.scss';

export const Comments: FC<{comments: IComment[]}> = ({comments}) => {
  const {user} = useAuth();

  return (
    <div className={classes.comments}>
      <h2>Комментарии</h2>
      <div className={classes.line} />
      {comments.length ? (
        <div className={classes.grid}>
          {comments.map(comment => (
            <CommentItem
              comment={comment}
              key={comment.id}
            />
          ))}
        </div>
      ) : (
        <p>Комментарии не найдены!</p>
      )}
      <div className={classes.bottomForm}>{user && <AddCommentForm />}</div>
    </div>
  );
};
