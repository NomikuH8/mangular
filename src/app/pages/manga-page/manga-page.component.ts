import { MangaManagerService } from 'src/app/services/manga-manager.service';
import { Chapter, Volume } from '../../interfaces/volume';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Manga } from '../../interfaces/manga';

@Component({
  selector: 'app-manga-page',
  templateUrl: './manga-page.component.html',
  styleUrls: ['./manga-page.component.css']
})
export class MangaPageComponent implements OnInit {

  manga: Manga = {}
  volumes: Volume[] = []

  constructor(
    private route: ActivatedRoute,
    private mangaManager: MangaManagerService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap
    const mangaId = routeParams.get('mangaId')!

    this.mangaManager.getManga(mangaId).subscribe((data) => {
      this.manga = data.data
    })

    this.mangaManager.getMangaVolumesAndChapters(mangaId).subscribe((data) => {
      this.volumes = Object.values(data.volumes)
    })
  }

  downloadVolume(vol: Volume): void {
    const chapters: string[] = []

    Object.values(vol.chapters).map((chap: Chapter) => chapters.push(chap.id))
    // todo
  }
}
