import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../services/quote.service';
// import { QUOTES } from '../../mock-quotes'; // not necessary whern using services
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
    this.quotes = this.quoteService.getQuotes();
  }

  // methods
  addQuote(quote: Quote) {
    this.quotes.push(quote);
  }

  deleteGoal(toDelete: any, index: any) {
    confirm('Are you sure to delete?') === true
      ? this.quotes.splice(index, 1)
      : false;
  }
}
