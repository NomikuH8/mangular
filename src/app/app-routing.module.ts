import { MangaPageComponent } from './pages/manga-page/manga-page.component'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { NgModule } from '@angular/core'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'manga/:mangaId', component: MangaPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
