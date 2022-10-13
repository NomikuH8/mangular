export interface Volume {
  volume: string
  count: number
  chapters: Chapter[]
}

export interface Chapter {
  chapter: string;
  id:      string;
  others:  string[];
  count:   number;
}
