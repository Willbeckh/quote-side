import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../quote';
@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css'],
})
export class CreateQuoteComponent implements OnInit {
  @Output() onAddQuote: EventEmitter<Quote> = new EventEmitter();
  text!: string;
  author!: string;
  date!: string;
  upvotes: number = 1;
  downvotes: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    // validate input
    if (!this.text) {
      alert('please enter a quote');
      return;
    }

    const newQuote = {
      text: this.text,
      author: this.author,
      date: this.date,
      upvotes: this.upvotes,
      downvotes: this.downvotes,
    };

    this.onAddQuote.emit(newQuote);

    // reset form
    this.text = '';
    this.author = '';
  }
}
