import { dashboardReducerStateType } from '../../Dashboard/redux/reducer';

interface hlsType {
  playlist: string,
  files: string[]
}

interface urlsType {
  mp4: string,
  mov: string,
  hls: hlsType
}

export interface mediaType {
  id: number,
  likes_count: number,
  comments_count: number,
  urls: urlsType
}

export interface storeType {
  loader: any;
  dashboard: dashboardReducerStateType;
}
