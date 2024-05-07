
export interface Option {
  method: string;
  url: string;
  params?: Record<string, string>;
  headers: {
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
  };
}

export enum URL {
  INFOS = "infos",
  RADIO = "radio",
  GENRE = "genre",
  SEARCH = "search",
  PLAYLIST = "playlist",
  ARTIST = "artist",
  EDITORIAL = "editorial",
  TRACK = "track",
  COMMENT = "comment",
  ALBUM = "album"
}
