import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  username = '';
  allowClickButton=false;


  constructor() { }

  ngOnInit() {
  }

  submitUsername() {
    this.username ='';
  }

  onUpdateUserName(event: Event) {
      if(this.username.length >0)
      {
        this.allowClickButton= true;
      }

  }

}
