import {IVideo} from '@/types/video.interface';

export interface IHome {
  videos: IVideo[];
  topVideo: IVideo;
  randomVideo: IVideo;
}
