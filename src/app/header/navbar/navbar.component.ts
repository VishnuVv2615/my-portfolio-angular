import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { flush } from '@angular/core/testing';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isMenuOpen= false;

  navLinks=[
    {name:'Home',path:''},
    {name:'About',path:'/about'},
    {name:'My Skills',path:'/myskills'},
    {name:'Projects',path:'/projects'},
    {name:'Contact',path:'/contact'},
  ]

  toggleMenu(){
    this.isMenuOpen=!this.isMenuOpen;
  }
  closeMenu(){
    this.isMenuOpen=false;
  }
}
