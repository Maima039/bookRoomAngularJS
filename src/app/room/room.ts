export interface Room{
  total:number;
  available:number;
  booked:number
}

export interface RoomList{
  roomNumber?:string;
  roomType:string;
  amenities:string;
  price:number;
  photos:string;
  checkinTime:Date|number;
  checkoutTime:Date|number;
  rating:number
}

