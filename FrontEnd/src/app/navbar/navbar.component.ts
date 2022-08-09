import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../guards/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //to store the localStorage 
  local:any

  gender:string|null=''
  constructor(private authService:AuthService,private route:Router) { }
  ngOnInit(): void {
    this.local = localStorage
    this.gender=localStorage.getItem('gender')
  }

  //logout function
  logout(){

    //call the auth service and reroute to login page
    this.authService.logout();
    localStorage.removeItem('token')
    location.reload()
    this.route.navigate(['/login']);
  }
}
