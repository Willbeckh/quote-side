import { Component, OnInit } from '@angular/core';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faQuoteLeft = faQuoteLeft;
  faQuoteRight = faQuoteRight;
  quote: string =
    'Happiness is the meaning and the purpose of life, the whole aim and end of human existence.';
  quoteAuthor: string = '- Aristotle';
  constructor() {}

  ngOnInit(): void {}
}
