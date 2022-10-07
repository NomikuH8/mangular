export interface Manga {
  id?: string
  type?: 'manga'
  attributes?: {
    title?: string
    altTitles?: string[]
    description?: string
    isLocked?: boolean
    links?: object
    originalLanguage: string
    lastVolume: string
    lastChapter: string
    publicationDemographic?: 'shounen' | 'shoujo' | 'josei' | 'seinen'
    status: 'completed' | 'ongoing' | 'cancelled' | 'hiatus'
    year?: number
    contentRating: 'safe' | 'suggestive' | 'erotica' | 'pornographic'
    chapterNumbersResetOnNewVolume: boolean
    availableTranslatedLanguages: string[]
    latestUploadedChapter: string
    tags: []
    state: 'draft' | 'submitted' | 'published' | 'rejected'
    version: number
    createdAt: Date
    updatedAt: Date
  }
}
