import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { userReducer } from './stateManagement/reducers/user.reducer';
import { HomeComponent } from './components/home/home.component';
import { NgrxworkComponent } from './components/ngrxwork/ngrxwork.component';
import { NgidlekeepaliveComponent } from './components/ngidlekeepalive/ngidlekeepalive.component';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NgrxworkComponent,
    NgidlekeepaliveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    NgIdleKeepaliveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
