import { Component, OnInit } from '@angular/core';
import { ClockService } from '../../services/clock.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'clock-container',
  templateUrl: './clock-container.component.html',
  styleUrls: ['./clock-container.component.scss']
})
export class ClockContainerComponent implements OnInit {
  destroyed$: Subject<boolean> = new Subject<boolean>();
  date;

  constructor(private clockService: ClockService) { }

  ngOnInit(): void {
    this.clockService.getTime()
      .pipe(
        takeUntil(this.destroyed$)
        )
      .subscribe(time => { 
        this.date = time
    });
  }
}
