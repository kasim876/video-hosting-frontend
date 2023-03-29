import {IBase} from '@/types/base.interface';
import {ISubscription} from '@/types/subscription.interface';
import {IVideo} from '@/types/video.interface';

export interface IUser extends IBase {
  email: string;
  name: string;
  description: string;
  subscribersCount?: number;
  avatarPath: string;
  videos: IVideo[];
  subscriptions: ISubscription[];
}
