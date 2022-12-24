import {AfterContentInit, Component, ContentChild, Host, OnInit} from '@angular/core';
import {EmployeeComponent} from "../employee/employee.component";
import {RoomService} from "../room/service/room.service";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers:[RoomService]
})
export class ContainerComponent implements OnInit,AfterContentInit{
  @ContentChild(EmployeeComponent) employee!:EmployeeComponent;
  constructor(@Host() private roomService:RoomService) {
  }
  ngOnInit(){}
  ngAfterContentInit():void {
    this.employee.empName='Jck'
  }

}
