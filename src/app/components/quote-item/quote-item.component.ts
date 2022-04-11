import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../quote';
import { faTrash, faQuoteLeftAlt, faThumbsUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css'],
})
export class QuoteItemComponent implements OnInit {
  @Input() quote!: Quote;
  @Output() deleteQuote: EventEmitter<Quote> = new EventEmitter();
  @Output() onLike: EventEmitter<Quote> = new EventEmitter();
  faTrash = faTrash;
  faQuoteLeftAlt = faQuoteLeftAlt;
  faThumbsUp = faThumbsUp;
  faArrowAltCircleDown = faArrowAltCircleDown;

  upvotes = 100;
  constructor() {}

  ngOnInit(): void {}

  // clicked = false;

  onClickDelete(quote: Quote) {
    this.deleteQuote.emit(quote);
  }

  upvote(quote: Quote) {
    this.upvotes = quote.upvotes++;
    this.onLike.emit(quote);
  }

  downvote() {
    this.quote.downvotes++;
    // this.onLike.emit();
  }
}
