import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent} from './home-page/home-page.component';
import {AboutTheFirmComponent} from './about-the-firm/about-the-firm.component';
import {PracticeAreasComponent} from './practice-areas/practice-areas.component';
import {PaFamilyLawComponent} from './pa-family-law/pa-family-law.component';
import {PaGuardianshipComponent} from './pa-guardianship/pa-guardianship.component';
import {PaWillsTrustsEstatesComponent} from './pa-wills-trusts-estates/pa-wills-trusts-estates.component';
import {PaProbateComponent} from './pa-probate/pa-probate.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {FaqComponent} from './faq/faq.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutTheFirmComponent},
  {
    path: 'practice-areas',
    component: PracticeAreasComponent,
    children: [
      {path: 'faq', component: FaqComponent},
      {path: 'family-law', component: PaFamilyLawComponent},
      {path: 'guardianship', component: PaGuardianshipComponent},
      {path: 'wills-trusts-estates', component: PaWillsTrustsEstatesComponent},
      {path: 'probate', component: PaProbateComponent},
    ]
  },
  {path: 'contact-us', component: ContactUsComponent},
  {path: '**', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
