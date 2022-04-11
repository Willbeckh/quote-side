import { Component, OnInit } from '@angular/core';
import { faAtom } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Quotes';
  faAtom = faAtom;

  constructor() {}

  ngOnInit(): void {}
}
