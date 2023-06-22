import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/stateManagement/appState';
import { User } from 'src/app/stateManagement/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 user : User | undefined;

  constructor(private store: Store<AppState>) { 
    store.select('user').subscribe((x) => { this.user = x;});
}

  ngOnInit() : void { 
    
  }

}
