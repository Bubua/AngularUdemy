import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 displayParagraph = false;
 timestampClicks = [];

  constructor() { }

  ngOnInit() {
  }

  toggleParagraph() {
      var d = new Date();
      this.timestampClicks.push(d.getTime());
  }
  
  getDisplay() {
       return this.displayParagraph === false ? true : false;
  }
}
