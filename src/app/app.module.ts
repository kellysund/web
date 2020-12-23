import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {HomePageComponent} from './home-page/home-page.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AboutTheFirmComponent } from './about-the-firm/about-the-firm.component';
import { PracticeAreasComponent } from './practice-areas/practice-areas.component';
import { PaFamilyLawComponent } from './pa-family-law/pa-family-law.component';
import { PaGuardianshipComponent } from './pa-guardianship/pa-guardianship.component';
import { PaWillsTrustsEstatesComponent } from './pa-wills-trusts-estates/pa-wills-trusts-estates.component';
import { PaProbateComponent } from './pa-probate/pa-probate.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutTheFirmComponent,
    PracticeAreasComponent,
    PaFamilyLawComponent,
    PaGuardianshipComponent,
    PaWillsTrustsEstatesComponent,
    PaProbateComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
