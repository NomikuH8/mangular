import { Manga } from "./manga"

export interface SearchReturn {
  result: string
  response: string
  data: Manga[]
}
