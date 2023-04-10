import {IBase} from './base.interface';
import {IVideo} from './video.interface';

export interface ILike extends IBase {
  toVideo: IVideo;
}
