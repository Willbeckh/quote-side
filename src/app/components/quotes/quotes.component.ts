import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../services/quote.service';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [];
  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.quoteService.getQuotes().subscribe((quotes) => (this.quotes = quotes));
  }

  onDeleteQuote(quote: Quote) {
    this.quoteService
      .deleteQuote(quote)
      .subscribe(
        () => (this.quotes = this.quotes.filter((q) => q.id !== quote.id))
      );
  }

  addQuote(quote: Quote): void {
    this.quoteService.addQuote(quote).subscribe((quote) => this.quotes.push(quote));
  }
}
