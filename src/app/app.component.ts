import {
  AfterViewInit,
  Component,
  ElementRef, Inject,
  OnInit, Optional,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {RoomComponent} from "./room/room.component";
import {LoggerService} from "./logger.service";
import {localstorageToken} from "./localstorage.token";
import {InitService} from "./init.service";
import {ConfigService} from "./services/config.service";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bookRoom';
  role='Admin'


  @ViewChild('name',{static:true}) name!:ElementRef

  constructor(@Optional() private loggerService:LoggerService,
              @Inject(localstorageToken) private localStorage:any,
              private initService:InitService,
              private configService:ConfigService,
              // route Events
              private router:Router
              ) {
    console.log(this.initService.config)
  }

  @ViewChild('user',{read:ViewContainerRef}) vcr!:ViewContainerRef;
  ngOnInit() {
    // routeEvents

    // this.router.events.subscribe((event) => {
    //   console.log(event);
    // });

    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event) => {
      console.log('Navigation Started');
    });
    //
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        console.log('Navigation Completed');
      });

    this.loggerService?.log('AppComponent.ngOnInit()');
    this.name.nativeElement.innerText = 'Hilton Hotel';

    this.localStorage.setItem('name', 'Hilton Hotel');


  }

  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomComponent)
  //   componentRef.instance.numOfRooms= 50
  //   // this.localStorage.setItem('name','Hilton')
  // }


}
