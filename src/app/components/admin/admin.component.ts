import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { plainToInstance } from 'class-transformer';
import { SessionService } from 'src/app/core/services/session.service';
import { UserModel } from './model/user.model';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users : UserModel[];
  
  constructor(private readonly userService : UserService, private readonly sessionService: SessionService, private router: Router) { } 

  ngOnInit(): void {    

    if(this.sessionService.getSession() && this.sessionService.getSession().isAdmin) {
      this.userService.findAll().subscribe({
        next: (users: UserModel[]) => {
          this.users = plainToInstance(UserModel, users);         
        },
        complete: () => { },
        error: (error: any) => { console.log(error) }
      });
    }
    else{
      this.router.navigate(["/accueil"]);
    }

    
  }
}
