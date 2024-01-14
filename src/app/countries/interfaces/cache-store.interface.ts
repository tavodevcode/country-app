import { Country } from './country.interface'
import { Region } from './region.type'

export interface CacheStore {
  byCapital: TermCountry
  byContries: TermCountry
  byRegion: TermRegion
}

export interface TermCountry {
  search: string
  countries: Country[]
}

export interface TermRegion {
  region: Region
  countries: Country[]
}
