export interface Album {
  id: number;
  cover: string;
  cover_small: string
  cover_medium: string
  title: string;
  tracklist: string;
  type: string;
}

export interface Artist {
  id: number;
  link: string;
  name: string;
  picture: string;
  picture_medium: string;
  picture_small: string
  picture_big: string
  tracklist: string;
  type: string;
}

// Main
export interface SearchResponseT {
  id: number;
  album: Album;
  artist: Artist;
  duration: number;
  link: string;
  preview: string;
  rank: number
  title: string;
  type: string;
}


// Contributors
export interface Contributors {
  id: number;
  link: string;
  name: string;
  picture: string;
  picture_big: string;
  picture_medium: string;
  radio: boolean;
  role: string;
  share: string;
  tracklist: string;
  type: string;
}

export interface ContributorsArray {
  data: Array<Contributors>
}

// Genres
export interface Genres {
  id: number;
  name: string;
  picture: string;
  type: string;
}

export interface GenresArray {
  data: Array<Genres>;
}

//  Track
export interface Track {
  id: number;
  readable: boolean;
  title: string;
  duration: number
  rank: number
}

export interface TracksArray {
  data: Array<Track>;
}
// Main
export interface AllInfoAlbum {
  artist: Artist;
  contributors: ContributorsArray;
  genres: GenresArray;
  tracks: TracksArray;
  cover: string;
  cover_big: string;
  cover_medium: string;
  cover_small: string
  duration: number;
  fans: number;
  genre_id: number
  id: number;
  label: string;
  link: string;
  md5_image: string;
  nb_tracks: number;
  record_type: string;
  release_date: string;
  title: string;
  tracklist: string;
  type: string
  upc: string
}