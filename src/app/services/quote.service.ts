import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from '../quote';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private apiUrl =
    'https://my-json-server.typicode.com/Willbeckh/quote-side/quotes';

  constructor(private http: HttpClient) {}

  // GET all quotes from api backend
  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.apiUrl);
  }

  deleteQuote(quote: Quote): Observable<Quote> {
    const url = `${this.apiUrl}/${quote.id}`;
    return this.http.delete<Quote>(url);
  }

  addQuote(quote: Quote): Observable<Quote> {
    return this.http.post<Quote>(this.apiUrl, quote, httpOptions);
  }

  // this tries to update the number of likes.
  onLikeQuote(quote: Quote): Observable<Quote> {
    return this.http.put<Quote>(
      `${this.apiUrl}/${quote.upvotes}`,
      quote,
      httpOptions
    );
  }
}
