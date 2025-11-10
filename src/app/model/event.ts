import { Time } from "@angular/common";

export interface Event {
  id: number;
  name: string;
  idType:number;
  idUser:number;
  date:Date;
  duration?:Time;
  description:string;
  createdAt?: Date;
  updatedAt?: Date;
}