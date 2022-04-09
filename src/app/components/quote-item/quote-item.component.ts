import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../../quote';
import { faTrash, faQuoteLeftAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css'],
})
export class QuoteItemComponent implements OnInit {
  @Input() quote!: Quote;
  faTrash = faTrash;
  faQuoteLeftAlt = faQuoteLeftAlt;
  constructor() {}

  ngOnInit(): void {}
}
