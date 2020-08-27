import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClockService } from 'src/app/services/clock.service';


@Component({
  selector: 'time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent implements OnInit {
  
  date = new Date();
  time: string = String(this.date.getHours()).padStart(2, "0") +
    ':' + String(this.date.getMinutes()).padStart(2, "0") +
    ':' + String(this.date.getSeconds()).padStart(2, "0");

  constructor(private clockService: ClockService) { }

  ngOnInit(): void {
  }

  synchronizeClocks() {
    const hhmmss = this.time.split(':');
    const hhmmssInt = hhmmss.map((time)=> parseInt(time));

    if (hhmmssInt[0] > 24 ||  hhmmssInt[1] > 59 || hhmmssInt[2] > 60 ) {
      throw new Error('Please enter valid time');
    }
    this.clockService.synchronize(hhmmssInt[0], hhmmssInt[1], hhmmssInt[2]);
  }
}
