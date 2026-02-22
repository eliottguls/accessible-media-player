export interface FilmInfo {
  file_url: string;
  title: string;
  synopsis_url: string;
}

export interface Subtitles {
  en: string;
  fr: string;
  es: string;
}

export interface ChapterEntry {
  chapter: number;
  timestamp: string;
  title: string;
  title_fr: string;
  description_fr: string;
}

export interface POIScene {
  time: string;
  scene_fr: string;
}

export interface POIEntry {
  id: number;
  title_fr: string;
  latitude: number;
  longitude: number;
  description_fr: string;
  timestamps?: POIScene[];
}

export interface FilmData {
  film: FilmInfo;
  subtitles: Subtitles;
  audiodescription: undefined;
  chapters: ChapterEntry[];
  poi: POIEntry[];
}