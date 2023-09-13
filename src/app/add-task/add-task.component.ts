import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  list:any[]=[];
  addTask(task:string){
    
    this.list = [...this.list, {id:this.list.length,task}];
    console.warn(this.list);
  }
  removeItem(id:number){
    // console.log(id);
    this.list = this.list.filter((item)=>item.id!==id);
  }
}
