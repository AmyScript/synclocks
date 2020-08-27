import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss']
})
export class AnalogClockComponent implements OnInit {

  @ViewChild('hrHand', {static: false}) hrHand: ElementRef;
  @ViewChild('minHand', {static: false}) minHand: ElementRef;
  @ViewChild('secHand', {static: false}) secHand: ElementRef;

  @Input() set date(_date) {
    if(_date) {
      this.updateClock(_date);
    }
  }

  constructor() { }

  ngOnInit(): void {

  }

  updateClock([hour, minute, second]) {
    this.secHand.nativeElement.style.transform = `rotate(${second * 6 }deg)`;
    this.minHand.nativeElement.style.transform = `rotate(${minute * 6 }deg)`;
    this.hrHand.nativeElement.style.transform = `rotate(${hour * 30 + minute * 0.5 }deg)`;
  }
}
