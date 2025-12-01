import { Routes } from '@angular/router';
import { HomeComponent } from '@container/home/home.container';
import { LoginComponent } from '@container/login/login.container';
import { SubscribeComponent } from '@container/subscribe/subscribe.container';
import { UpdateEventComponent } from '@container/update-event/update-event.container';
import { CreateEventComponent } from '@container/create-event/create-event.container';
import { TagsComponent } from '@container/modify-tags/tags.container';
import { AuthGuard } from '../app/auth.guard';



export const routes: Routes = [ 
  { path: '', component: HomeComponent },

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'subscribe', component: SubscribeComponent },

  { path: 'event/update/:id', component: UpdateEventComponent, canActivate: [AuthGuard] },
  { path: 'event/create', component: CreateEventComponent, canActivate: [AuthGuard] },
  { path: 'tags', component: TagsComponent, canActivate: [AuthGuard] },


  { path: '**', redirectTo: '' }
  ];
