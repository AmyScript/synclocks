import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalogClockComponent } from './components/analog-clock/analog-clock.component';
import { DigitalClockComponent } from './components/digital-clock/digital-clock.component';
import { TimePickerComponent } from './components/time-picker/time-picker.component';
import { ClockContainerComponent } from './containers/clock-container/clock-container.component';

@NgModule({
  declarations: [
    AppComponent,
    AnalogClockComponent,
    DigitalClockComponent,
    TimePickerComponent,
    ClockContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
