import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './stateManagement/appState';
import * as UserActions from './stateManagement/actions/userActions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularWithNgrx';

  constructor(private store: Store<AppState>){
    
  }

  setName() {
    debugger;
    this.store.dispatch(new UserActions.SetUser({ name: "jjj" }))
  }

}

