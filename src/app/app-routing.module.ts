import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { InfoComponent } from './pages/info/info.component';
import { RunnersComponent } from './pages/runners/runners.component';
import { DonationComponent } from './pages/donation/donation.component';
import { GalleryComponent } from './pages/gallery/gallery.component';



const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'info', component: InfoComponent},
  {path:'runners', component: RunnersComponent},
  {path:'donation', component: DonationComponent},
  {path:'gallery', component: GalleryComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
