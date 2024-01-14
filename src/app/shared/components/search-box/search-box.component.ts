import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core'
import { Subject, Subscription, debounceTime } from 'rxjs'

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: []
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>()
  private debouncerSubscription?: Subscription

  @Input()
  public placeholder: string = 'Search...'

  @Input()
  public initialSearch: string = ''

  @Output()
  public searchValue: EventEmitter<string> = new EventEmitter<string>()

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter<string>()

  @ViewChild('txtSearch')
  public txtSearch!: ElementRef<HTMLInputElement>

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.onDebounce.emit(value)
    })
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe()
  }

  public keyupSearch(): void {
    const value = this.txtSearch.nativeElement.value

    this.searchValue.emit(value)
  }

  public onKeyPress(): void {
    const value = this.txtSearch.nativeElement.value

    this.debouncer.next(value)
  }
}
