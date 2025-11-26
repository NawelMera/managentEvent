export * from './email.service';
import { EmailService } from './email.service';
export * from './event.service';
import { EventService } from './event.service';
export * from './type.service';
import { TypeService } from './type.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [EmailService, EventService, TypeService, UserService];
