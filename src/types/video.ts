interface IVideo {
  title: string;
  autor: string;
  views: number;
  likes: number;
  path: string;
  thumbnail: string;
  date: string;
}

export interface IVideoState {
  videos: IVideo[] | null;
}
