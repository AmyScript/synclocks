import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {

  @Input() set date(_date) {
    if(_date) {
      this.updateClock(_date);
    }
  }

  public hour: any;
  public minute: string;
  public second: string;
  public ampm: string;
  public day: string;

  constructor() { }

  ngOnInit(): void {
  }

  private updateClock([hour, minute, second]) {

    this.ampm = hour >= 12 ? 'PM' : 'AM';

    this.hour = hour % 12; // convert into 12 hours
    this.hour = this.hour ? this.hour : 12; // if the hour is 0 then 12.

    this.hour = this.hour < 10 ? '0' + this.hour : this.hour;
    this.minute  = minute < 10 ? '0' + minute : minute.toString();
    this.second = second < 10 ? '0' + second : second.toString();
  }


}
