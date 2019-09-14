import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  
  id:number
  showUser:User;

  constructor(
    private us:UserService,
    private router:Router,
    private ar:ActivatedRoute
  ) { 
    this.ar.params.forEach(params=>{
      this.id=params.id;
      this.us.getOne(this.id).forEach(
        user=>{this.showUser=user[0]})
    })
  }
  ngOnInit(){
    
  }

}
