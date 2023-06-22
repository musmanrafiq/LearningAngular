import {ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';

@Component({
  selector: 'app-ngidlekeepalive',
  templateUrl: './ngidlekeepalive.component.html',
  styleUrls: ['./ngidlekeepalive.component.css']
})
export class NgidlekeepaliveComponent implements OnInit {

  idleState: string = 'Not Started';

  constructor(private idle: Idle, private cd: ChangeDetectorRef) {
    idle.setIdle(5);
    idle.setTimeout(5);
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => {
      this.idleState = 'Started'
      cd.detectChanges();
    })

    idle.onTimeout.subscribe(() => {
      this.idleState = "Timedout"
    })

    idle.onIdleStart.subscribe(() =>{
      this.idleState = "Idle"
    })
  }

  ngOnInit(): void {
    this.setStates();
  }

  setStates(){
    this.idle.watch();
    this.idleState = 'Started';
  }
}
