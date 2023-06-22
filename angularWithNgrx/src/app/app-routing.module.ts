import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgrxworkComponent } from './components/ngrxwork/ngrxwork.component';
import { NgidlekeepaliveComponent } from './components/ngidlekeepalive/ngidlekeepalive.component';

const routes: Routes = [

  { 
    path: '', component: HomeComponent
  },
  {
    path: 'ngrx', component: NgrxworkComponent
  },
  {
    path: 'ngidlekeepalive', component: NgidlekeepaliveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
