import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  data = 10;
  Data = '';
  changeData(){
    this.data = Math.floor(Math.random()*10);
  }
  userDetails = [{name:"vaidik",email:"vaidik@gmail.com"},
  {name:"dharmik",email:"dharmik@gmail.com"},
  {name:"krupesh",email:"krupesh@gmail.com"},
  {name:"Aastha",email:"aastha@gmail.com"},
  {name:"Jay",email:"jay@gmail.com"}]

  updateData(item:string){
    console.warn(item);
    this.Data = item;
  }
}
