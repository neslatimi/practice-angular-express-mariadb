import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id;
  edituser:User

  constructor(
    private us:UserService,
    private router:Router,
    private ar:ActivatedRoute
  ) { 
    this.ar.params.forEach(params=>{
      this.id=params.id;
      this.us.getOne(this.id).forEach(
        user=>{this.edituser=user[0]})
    })
  }

  ngOnInit() {
  }

  onUpdate(){
    console.log(this.edituser,parseInt(this.id))
    this.us.update(this.edituser,parseInt(this.id)).forEach(data=>{data;this.edituser=new User()});
    this.router.navigateByUrl("/")
  }

}
