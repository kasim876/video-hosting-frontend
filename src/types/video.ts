export interface IVideo {
  userId: number;
  userName: string;
  userAvatar: string;
  id: number;
  title: string;
  videoName: string;
  thumbnailName: string;
  createdAt: string;
}

export interface IVideoState {
  loading: boolean;
  videos: IVideo[] | null;
}
