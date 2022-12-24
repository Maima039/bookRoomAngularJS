import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import {RoomsBookingComponent} from "./rooms-booking/rooms-booking.component";
import {RoomListComponent} from "./room-list/room-list.component";
import {RoomsAddComponent} from "./rooms-add/rooms-add.component";
import {RoomComponent} from "./room.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderModule} from "../header/header.module";
import {RouteConfigToken} from "../services/routeConfig.service";
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    RoomsBookingComponent,
    RoomListComponent,
    RoomsAddComponent,
    RoomComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    HeaderModule,
    ReactiveFormsModule
  ],
  providers:[
    {
      provide:RouteConfigToken,
      useValue:{title:'Rooms'}
    }
  ]
})
export class RoomsModule { }
