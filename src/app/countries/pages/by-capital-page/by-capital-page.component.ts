import { Component, OnInit } from '@angular/core'
import { CountriesService } from '../../services/countries.service'
import { Country } from '../../interfaces/country.interface'

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: []
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = []
  public isLoading: boolean = false
  public initialSearch: string = ''

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries
    this.initialSearch = this.countriesService.cacheStore.byCapital.search
  }

  searchByCapital(value: string) {
    this.isLoading = true

    this.countriesService.searchCapital(value).subscribe((countries) => {
      this.countries = countries
      this.isLoading = false
    })
  }
}
