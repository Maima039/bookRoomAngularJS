import { Pipe, PipeTransform } from '@angular/core';
import {RoomList} from "./room";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
// 应该在后端，而不是前端？ 避免用此法
  transform(rooms: RoomList[], price: number): RoomList[] {
    return rooms.filter((room)=>room.price > price);
  }

}
