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

export interface FilmData {
  film: FilmInfo;
  subtitles: Subtitles;
  audiodescription: undefined;
  chapters: ChapterEntry[];
  poi: undefined;
}