import { Routes } from '@angular/router';
import { HomeComponent } from 'container/home/home.component';
import { EventsComponent } from 'container/events/events.component';
import { LoginComponent } from 'container/login/login.component';
import { SettingsComponent } from 'container/settings/settings.component';
import { SubscribeComponent } from 'container/subscribe/subscribe.component';
import { UpdateEventComponent } from 'container/update-event/update-event.component';
import { CreateEventComponent } from 'container/create-event/create-event.component';



export const routes: Routes = [ 
  { path: '', component: HomeComponent },  // route par défaut
  { path: 'home', component: HomeComponent },  // route par défaut
  { path: 'event', component: EventsComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'settings', component: SettingsComponent }, 
  { path: 'subscribe', component: SubscribeComponent }, 
  { path: 'event/update', component: UpdateEventComponent }, 
  { path: 'event/create', component: CreateEventComponent }, 
  ];
