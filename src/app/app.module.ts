import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardNameChildComponent } from './card-name-child/card-name-child.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RateingBarComponentComponent } from './rateing-bar-component/rateing-bar-component.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { ShowTimeComponent } from './show-time/show-time.component';
import { AngularFormComponent } from './angular-form/angular-form.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CardNameChildComponent,
    ProgressBarComponent,
    RateingBarComponentComponent,
    CountdownTimerComponent,
    ShowTimeComponent,
    AngularFormComponent
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
