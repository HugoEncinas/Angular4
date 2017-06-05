import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  usernameIsEmpty = true;

  changeUsername(event) {
    var exists =  !((<HTMLInputElement>event.target).value=="");
    if (exists) {
      this.usernameIsEmpty = false;
    }
  }

  resetUsername(){
    this.username='';
    this.usernameIsEmpty = true;
  }
}
