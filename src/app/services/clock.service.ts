import { Injectable } from '@angular/core';
import { Observable, interval, Subject, timer } from 'rxjs';
import { map, switchMap, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ClockService {
  private $clock: Observable<number[]>;
  private setHour: number;
  private setMinute: number;
  private setSecond: number;

  private reset$ = new Subject();

  constructor() {
    this.$clock = this.reset$.pipe(
      startWith(0),
      switchMap(() => timer(0, 1000).pipe(
        map(seconds => {
          const date = new Date();
          this.updateClocks(date, seconds);
          return [
            date.getHours(),
            date.getMinutes(),
            date.getSeconds()
          ];
        })
      ))
    );
  }

  refreshTimer(): void {
    this.reset$.next(void 0);
  }

  getTime(): Observable<number[]> {
    return this.$clock;
  }

  updateClocks(date, seconds) {
    console.log(this.setHour , this.setMinute , this.setSecond)
    if (this.setHour && this.setMinute && this.setSecond) {
      date.setHours(this.setHour);
      date.setMinutes(this.setMinute);
      date.setSeconds(this.setSecond + seconds);
    }
  }

  synchronize(hour, minute, second) {
    this.setHour = hour;
    this.setMinute = minute;
    this.setSecond = second;
    this.refreshTimer();
  }

}
