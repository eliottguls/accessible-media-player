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
export interface FilmData {
  film: FilmInfo;
  subtitles: Subtitles;
  audiodescription: undefined;
  chapters: undefined;
  poi: undefined;
}