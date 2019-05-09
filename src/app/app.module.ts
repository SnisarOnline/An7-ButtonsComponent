import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ButtonComponent } from './button/button.component';
import { JellyButtonsComponent } from './button/jelly-buttons/jelly-buttons.component';
import { Btn3DflipComponent } from './button/btn3Dflip/btn3Dflip.component';
import { SubmitButtonsComponent } from './button/submit-buttons/submit-buttons.component';
import { BubblyButtonComponent } from './button/bubbly-button/bubbly-button.component';
import { ButtonHoverFormComponent } from './button/button-hover-form/button-hover-form.component';
import { MaskAnimationComponent } from './button/mask-animation/mask-animation.component';
import { RoundHoverComponent } from './button/round-hover/round-hover.component';
import { ButtonLineComponent } from './button/button-line/button-line.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    JellyButtonsComponent,
    Btn3DflipComponent,
    SubmitButtonsComponent,
    BubblyButtonComponent,
    ButtonHoverFormComponent,
    MaskAnimationComponent,
    RoundHoverComponent,
    ButtonLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
