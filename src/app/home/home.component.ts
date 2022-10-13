import { MangaManagerService } from '../manga-manager.service';
import { SearchReturn } from '../interfaces/search-return';
import { Component, OnInit } from '@angular/core';
import { Manga } from '../interfaces/manga';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mangaSearchData: Manga[] = []

  constructor(
    private mangaManager: MangaManagerService
  ) { }

  ngOnInit(): void {
  }

  formOnSubmit(e: Event): void {
    e.preventDefault()

    this.mangaManager.searchManga(
      document.querySelector('input')?.value!,
      0
    ).subscribe((data: SearchReturn) => this.mangaSearchData = data.data)
  }
}
