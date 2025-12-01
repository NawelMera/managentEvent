import { Routes } from '@angular/router';
import { HomeComponent } from 'container/home/home.component';
import { LoginComponent } from 'container/login/login.component';
import { SettingsComponent } from 'container/settings/settings.component';
import { SubscribeComponent } from 'container/subscribe/subscribe.component';
import { UpdateEventComponent } from 'container/update-event/update-event.component';
import { CreateEventComponent } from 'container/create-event/create-event.component';
import { TagsComponent } from '@container/modify-tags/tags.component';
import { AuthGuard } from '../app/auth.guard';



export const routes: Routes = [ 
  { path: '', component: HomeComponent },

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'subscribe', component: SubscribeComponent },

  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'event/update/:id', component: UpdateEventComponent, canActivate: [AuthGuard] },
  { path: 'event/create', component: CreateEventComponent, canActivate: [AuthGuard] },
  { path: 'tags', component: TagsComponent, canActivate: [AuthGuard] },


  { path: '**', redirectTo: '' }
  ];
