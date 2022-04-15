import { Injectable } from '@angular/core';
import { Quote } from '../quote';
import { QUOTES } from '../mock-quotes';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  addQuote(quote: Quote) {
    throw new Error('Method not implemented.');
  }
  quotes!: Quote[];
  constructor() {}

  getQuotes(): Quote[] {
    return QUOTES;
  }
  addQuotes(quote: Quote) {
    // console.log('add a quote! not working.');
    console.log(quote);
    this.quotes.push(quote);  }
}
