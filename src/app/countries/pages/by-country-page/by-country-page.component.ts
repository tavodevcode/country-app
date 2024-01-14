import { Component, OnInit } from '@angular/core'
import { Country } from '../../interfaces/country.interface'
import { CountriesService } from '../../services/countries.service'

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: []
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = []
  public initialSearch: string = ''

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byContries.countries
    this.initialSearch = this.countriesService.cacheStore.byContries.search
  }

  public searchCountry(value: string): void {
    this.countriesService.searchCountry(value).subscribe((countries) => {
      this.countries = countries
    })
  }
}
