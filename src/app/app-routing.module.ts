import { HomeComponent } from './home/home.component'
import { RouterModule, Routes } from '@angular/router'
import { NgModule, ɵExtraLocaleDataIndex } from '@angular/core'
import { MangaPageComponent } from './manga-page/manga-page.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'manga/:mangaId', component: MangaPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
