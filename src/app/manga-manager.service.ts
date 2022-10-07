import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Manga } from './model/manga';

@Injectable({
  providedIn: 'root'
})
export class MangaManagerService {

  searchQuery: string = ''
  currentManga: Manga = {}

  constructor(private httpClient: HttpClient) { }

  searchManga() {
    return this.httpClient.get(`${environment.mangadexApiUrl}/manga?${this.searchQuery}`);
  }

  getManga() {
  }
}
