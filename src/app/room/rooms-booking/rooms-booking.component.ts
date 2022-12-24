import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css'],
})
export class RoomsBookingComponent implements OnInit {
  id: any=0;
// 用pipe，不用subscribe
  id$ = this.router.paramMap.pipe(map((params) => params.get('roomId')));

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    // 不用这个
    // this.id = this.router.snapshot.params['roomid'];
    //subscribe 容易memory leakage
    // this.router.params.subscribe((params) => {
    //   this.id = params['roomId'];
    // });
  }
}
