import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {RoomList} from "../room";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomListComponent implements OnInit, OnChanges, OnDestroy {

  @Input() rooms: RoomList[]  = []
  @Input() title: string = ''
  @Input() price = 0
  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {
  }

  ngOnInit() {
  }

  // onChange
  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes)
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase()
    }
  }

  ngOnDestroy() {
    // console.log('destroy')
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room)
  }


}
