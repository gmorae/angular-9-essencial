import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _service: HeaderService
  ) { }

  ngOnInit(): void {
  }

  get title(): string {
    return this._service.headerData.title
  }

  get icon(): string {
    return this._service.headerData.icon
  }

}
