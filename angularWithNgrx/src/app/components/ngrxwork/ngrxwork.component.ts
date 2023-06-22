import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/stateManagement/appState';
import * as UserActions from '../../stateManagement/actions/userActions';


@Component({
  selector: 'app-ngrxwork',
  templateUrl: './ngrxwork.component.html',
  styleUrls: ['./ngrxwork.component.css']
})
export class NgrxworkComponent implements OnInit {
  
  title = 'angularWithNgrx';
  
 constructor(private store: Store<AppState>){
    
  }
  ngOnInit(): void {
  }
 setName() {
    this.store.dispatch(new UserActions.SetUser({ name: "jjj" }))
  }
}
