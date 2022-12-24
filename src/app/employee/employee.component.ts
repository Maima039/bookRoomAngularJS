import {Component, OnInit, Optional, Self, SkipSelf} from '@angular/core';
import {RoomService} from "../room/service/room.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[RoomService]
})
export class EmployeeComponent implements OnInit{
  empName:string=''
  constructor(@Self() @Optional() private roomService:RoomService) {
  }
  ngOnInit() {
  }

}
