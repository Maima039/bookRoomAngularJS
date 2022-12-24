import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from "./employee/employee.component";
import {RoomComponent} from "./room/room.component";
import {NotfountComponent} from "./notfount/notfount.component";

import {LogginComponent} from "./loggin/loggin.component";
import {LoginGuard} from "./guards/login.guard";

const routes: Routes = [

  {path:'employee',component:EmployeeComponent,canActivate:[LoginGuard]},
  // {path:'rooms',component:RoomComponent},
  // lazy loading
  {path:'rooms',
    loadChildren:()=>import('./room/rooms.module').then(m=>m.RoomsModule),
    canActivate:[LoginGuard],
    canLoad:[LoginGuard]
  },
  {path:'login',component:LogginComponent},
  {path:'',redirectTo:'/rooms',pathMatch:'full'},

  { path: 'booking/:roomId', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule),
    canActivate:[LoginGuard],
  },

  { path: 'comment', loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule) },
  {path:'**',component:NotfountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
