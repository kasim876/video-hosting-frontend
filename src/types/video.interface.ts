import {IBase} from '@/types/base.interface';
import {IComment} from '@/types/comment.interface';
import {IUser} from '@/types/user.interface';

export interface IVideo extends IBase {
  name: string;
  views: number;
  likes: number;
  videoPath: string;
  thumbnailPath: string;
  user: IUser;
  comments: IComment[];
}

export interface IVideoState {
  loading: boolean;
  videos: IVideo[] | null;
}
