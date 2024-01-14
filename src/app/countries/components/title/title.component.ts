import { Component, Input } from '@angular/core'

@Component({
  selector: 'countries-title',
  templateUrl: './title.component.html'
})
export class TitleComponent {
  @Input()
  public title: string = 'Title'
}
