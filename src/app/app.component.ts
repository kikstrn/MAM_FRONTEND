import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  scrollBottom:Subscription;

  constructor(private router: Router){    
  }

  ngOnInit(): void {
    this.router.events.pipe(filter((e: any) => e instanceof RoutesRecognized),pairwise()).subscribe((e: any) => {
      localStorage.setItem('lastUrl', e[0].urlAfterRedirects);
  });  
  }

  ngAfterViewInit(): void {    
  } 
  
}
