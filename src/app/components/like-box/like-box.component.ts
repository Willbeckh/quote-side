import { Component, OnInit } from '@angular/core';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-like-box',
  templateUrl: './like-box.component.html',
  styleUrls: ['./like-box.component.css'],
})
export class LikeBoxComponent implements OnInit {
  faArrowTrendUp = faArrowTrendUp;
  numberOfLikes: number = 0;
  constructor() {}

  ngOnInit(): void {}

  likeButtonClick() {
    this.numberOfLikes++;
  }
}
