import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoomComponent} from "./room.component";
import {RoomsAddComponent} from "./rooms-add/rooms-add.component";
import {RoomsBookingComponent} from "./rooms-booking/rooms-booking.component";
import {RoomGuard} from "./guards/room.guard";

const routes: Routes = [
  {
    path: '',
    component: RoomComponent,
    canActivateChild: [RoomGuard],
    children: [
      { path: 'add', component: RoomsAddComponent },
      // { path: ':roomId', component: RoomsBookingComponent },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
