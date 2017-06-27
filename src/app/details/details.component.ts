import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 displayParagraph =true;
 timestampClicks = [];

  constructor() { }

  ngOnInit() {
  }

  toggleParagraph() {
      this.displayParagraph = this.displayParagraph === false ? true : false;
          
      this.timestampClicks.push(new Date());
      console.log(this.timestampClicks);
  }

}
