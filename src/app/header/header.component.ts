import { Component } from '@angular/core';
import {ConfigService} from "../services/config.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  hotelName:string='M Hotel'
  constructor(  private configService:ConfigService) {
  }

}
