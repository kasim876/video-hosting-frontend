import {IBase} from '@/types/base.interface';
import {ISubscription} from '@/types/subscription.interface';
import {IVideo} from '@/types/video.interface';

import {ILike} from './like.interface';

export interface IUser extends IBase {
  email: string;
  name: string;
  description: string;
  subscribersCount: number;
  avatarPath: string;
  videos: IVideo[];
  subscriptions: ISubscription[];
  likedVideos: ILike[];
}
