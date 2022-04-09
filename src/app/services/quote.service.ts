import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import { Quote } from '../quote';
import { QUOTES } from '../mock-quotes';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor() { }

  // GET all quotes
  getQuotes(): Observable<Quote[]> {
    const quotes = of(QUOTES);
    return quotes;
  }
}
