import {APP_INITIALIZER, ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { RoomListComponent } from './room/room-list/room-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import {APP_CONFIG, APP_SERVICE_CONFIG} from "./AppConfig/appconfig.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RequestInterceptor} from "./request.interceptor";
import {InitService} from "./init.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfountComponent } from './notfount/notfount.component';
import {FormsModule} from "@angular/forms";
import { LogginComponent } from './loggin/loggin.component';
import { HoverDirective } from './hover.directive';
import { EmailValidatorDirective } from './email-validator.directive';
// import {RoomsModule} from "./room/rooms.module";
import {HeaderModule} from "./header/header.module";
import {RouteConfigToken} from "./services/routeConfig.service";
import {CommentModule} from "./comment/comment.module";
import {GlobalErrorHandler} from "./errorHandler.service";

function initFactory(initService:InitService){
  return ()=>initService.init()
}

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    EmployeeComponent,
    AppNavComponent,
    NotfountComponent,
    LogginComponent,
    HoverDirective,
    EmailValidatorDirective,

  ],
  imports: [
    BrowserModule,
    // Rooms放在App上面
    // RoomsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    HeaderModule,
    // RoomsModule
  ],
  providers: [
    {
      provide:APP_SERVICE_CONFIG,
      useValue:APP_CONFIG
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:RequestInterceptor,
      multi:true
    },
    // load environmental configs before app starts
    {
      provide:APP_INITIALIZER,
      useFactory:initFactory,
      deps:[InitService],
      multi:true
    },
    {
      provide:RouteConfigToken,
      useValue:{title:'Home'}
    },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
