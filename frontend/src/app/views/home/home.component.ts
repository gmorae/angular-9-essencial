import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _serviceHeader: HeaderService) {
    _serviceHeader.headerData = {
      title: 'Home', 
      icon: 'home'
    }
  }

  ngOnInit(): void {
  }

}
