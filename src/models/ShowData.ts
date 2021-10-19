export interface ICoverImage {
  large: string;
  color: string;
  medium: string;
  extraLarge: string;
}

export interface IPageInfo {
  total: number;
  perPage: number;
  lastPage: number;
  currentPage: number;
  hasNextPage: boolean;
}

export interface IAiringScheduleEpisode {
  id: number;
  airingAt: number;
  timeUntilAiring: number;
}

export interface IAiringSchedule {
  pageInfo: IPageInfo;
  nodes: IAiringScheduleEpisode[];
}

export interface ITitle {
  english: string;
  romaji: string;
}

export interface INextAiringEpisode {
  id: number;
  airingAt: number;
  timeUntilAiring: number;
}

export interface IMediaData {
  id: number;
  type: string;
  title: ITitle;
  episodes: number;
  coverImage: ICoverImage;
  airingSchedule: IAiringSchedule;
  nextAiringEpisode: INextAiringEpisode | null;
  status: 'FINISHED' | 'RELEASING' | 'NOT_YET_RELEASED';
}

export default interface IShowData {
  media: IMediaData;
  progress: number;
}
