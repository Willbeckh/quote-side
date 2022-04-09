import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../quote';
import { faTrash, faQuoteLeftAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css'],
})
export class QuoteItemComponent implements OnInit {
  @Input() quote!: Quote;
  @Output() deleteQuote: EventEmitter<Quote> = new EventEmitter();
  faTrash = faTrash;
  faQuoteLeftAlt = faQuoteLeftAlt;
  constructor() {}

  ngOnInit(): void {}

  onClickDelete(quote: Quote) {
    this.deleteQuote.emit(quote);    
  }
}
