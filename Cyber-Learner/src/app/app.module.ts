import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhishingComponent } from './phishing/phishing.component';
import { PasswordComponent } from './password/password.component';
import { TeamworkComponent } from './teamwork/teamwork.component';
import { GamesComponent } from './games/games.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'phishing', component: PhishingComponent},
  { path: 'password', component: PasswordComponent},
  { path: 'teamwork', component: TeamworkComponent},
  { path: 'games', component: GamesComponent}
];




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhishingComponent,
    PasswordComponent,
    TeamworkComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
