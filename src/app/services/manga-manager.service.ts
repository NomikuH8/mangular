import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SearchReturn } from '../interfaces/search-return';
import { Manga } from '../interfaces/manga';

@Injectable({
  providedIn: 'root'
})
export class MangaManagerService {

  currentManga: Manga = {}
  currentSearch: string = ''
  currentSearchData: Manga[] = []

  constructor(private httpClient: HttpClient) { }

  searchManga(searchQuery: string, page: number) {
    const limit = environment.mangaPageLimit
    const offset = limit * page

    return this.httpClient.get<SearchReturn>(`${environment.mangadexApiUrl}/manga?title=${searchQuery}&limit=${limit}&offset=${offset}&order[relevance]=desc`);
  }

  getCurSearchData(): Manga[] {
    return this.currentSearchData
  }

  // mangaId is uuid-like
  getManga(mangaId: string) {
    return this.httpClient.get<any>(`${environment.mangadexApiUrl}/manga/${mangaId}`)
  }

  getMangaVolumesAndChapters(mangaId: string) {
    return this.httpClient.get<any>(`${environment.mangadexApiUrl}/manga/${mangaId}/aggregate?translatedLanguage[]=pt-br`)
  }
}
