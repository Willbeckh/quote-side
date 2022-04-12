import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../quote';

import {
  faTrash,
  faQuoteLeftAlt,
  faThumbsUp,
  faArrowAltCircleDown,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css'],
})
export class QuoteItemComponent implements OnInit {
  @Input() quote!: Quote;
  // @Output() deleteQuote: EventEmitter<Quote> = new EventEmitter();
  // @Output() onLike: EventEmitter<Quote> = new EventEmitter();
  faTrash = faTrash;
  faQuoteLeftAlt = faQuoteLeftAlt;
  faThumbsUp = faThumbsUp;
  faArrowAltCircleDown = faArrowAltCircleDown;

  constructor() {}

  ngOnInit(): void {}

  upVote(): void {
    this.quote.upvotes++;
  }

  downVote(): void {
    this.quote.downvotes++;
  }
}
