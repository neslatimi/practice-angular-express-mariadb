import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { Observable, Subscriber } from 'rxjs';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchText='';
  user=new User();
  
  list$:Observable<any>=this.us.read();
  
  constructor(private us:UserService){
  us.assecc()
}
  title = 'finalAngular';
  onCreate(ev:Event):void{
    ev.preventDefault();
    console.log(this.user)
    this.us.create(this.user).forEach(data=>{data;this.user=new User()});
    
  }

  onUpdate(id){
    
  }
  onDelete(id:number):void{
    this.us.delete(id).forEach(data=>console.log(data));
  }
}
