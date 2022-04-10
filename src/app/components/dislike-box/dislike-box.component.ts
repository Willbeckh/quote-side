import { Component, OnInit } from '@angular/core';
import { faArrowTrendDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dislike-box',
  templateUrl: './dislike-box.component.html',
  styleUrls: ['./dislike-box.component.css'],
})
export class DislikeBoxComponent implements OnInit {
  faArrowTrendDown = faArrowTrendDown;
  numberOfDislikes: number = 0;
  constructor() {}

  ngOnInit(): void {}
  
  downVote() {
    this.numberOfDislikes++;
  }
}
