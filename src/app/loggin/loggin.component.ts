import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LogginService} from "./loggin.service";

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private route: Router, private loginService: LogginService) {}

  ngOnInit(): void {}

  login() {
    if(this.loginService.login(this.email, this.password)) {
      this.route.navigate(['/rooms']);
    }
  }
}
