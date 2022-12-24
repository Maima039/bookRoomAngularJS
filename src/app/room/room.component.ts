import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, OnChanges,
  OnInit,
  QueryList, SkipSelf,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {Room, RoomList} from "./room";
import {HeaderComponent} from "../header/header.component";
import {RoomService} from "./service/room.service";
import {catchError, map, observable, Observable, of, Subject, Subscription} from "rxjs";
import {HttpEventType} from "@angular/common/http";
import {ConfigService} from "../services/config.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>

  room: Room = {
    total: 300,
    available: 200,
    booked: 100
  }
  roomList: RoomList [] = []
  title = 'Room Available'

  stream = new Observable<string>(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete()

  })


  numOfRooms: number = 10
  hideRooms = false
  selectedRoom!: RoomList

  subscription!: Subscription

  // catch error
  error$ = new Subject<string>()
  getError$ = this.error$.asObservable()
  rooms$ = this.roomService.getRooms$.pipe(
    catchError((err) => {
      // console.log(err);
      this.error$.next(err.message);
      return of([]);
    })
  );

  priceFilter = new FormControl(0)

  roomsCount$ = this.roomService.getRooms$.pipe(
    map((rooms) => rooms.length)
  )

  // DI--service
  // roomService = new RoomService()

  constructor(@SkipSelf() private roomService: RoomService,
              private configService: ConfigService
  ) {
  }


  // 检测变化
  ngDoCheck() {
    // console.log('docheck')
  }

  ngOnInit(): void {
    this.roomService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          // console.log('Request has been made!');
          break;
        }
        case HttpEventType.ResponseHeader: {
          // console.log('Request success!');
          break;
        }
        // case HttpEventType.DownloadProgress: {
        //   this.totalBytes += event.loaded;
        //   break;
        // }
        case HttpEventType.Response: {
          // console.log(event.body);
        }
      }
    });
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete:
        () => console.log('complete'),
      error:
        (err) => console.log(err),
    })
    this.roomService.getRooms$.subscribe(rooms =>
      this.roomList = rooms
    )
  }


  ngAfterViewInit() {
    this.headerComponent.hotelName = "RoomsView"
    this.headerChildrenComponent.last.hotelName = "Last"
  }

  ngAfterViewChecked() {
    // console.log('checked')
  }

  toggle() {
    this.hideRooms = !this.hideRooms
    this.title = 'Room Unavailable'
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: '9',
      roomType: 'Luxury Suite',
      amenities: 'airCondition, breakfirst, TV',
      price: 350,
      photos: 'https://unsplash.com/photos/jbJ-_hw2yag',
      checkinTime: new Date('23-Dec-2022'),
      checkoutTime: new Date('26-Dec-2022'),
      rating: 4.9
    }
    // this.roomList = [...this.roomList,room]
    this.roomService.addRoom(room).subscribe(data => {
      this.roomList = data
    })
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: '1',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1800,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 3.45654,
    }
    this.roomService.editRoom(room).subscribe(data => {
      this.roomList = data
    })
  }


  deleteRoom() {
    this.roomService.delete('1').subscribe((data) => {
      this.roomList = data;
    });
  }


}
