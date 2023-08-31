import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { CarouselModule } from 'ngx-bootstrap/carousel'; 

import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';

import { CountdownComponent } from './cmps/count-down/count-down.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { InfoComponent } from './pages/info/info.component';
import { RunnersComponent } from './pages/runners/runners.component';
import { FooterComponent } from './cmps/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToolbarComponent } from './cmps/toolbar/toolbar.component';
import { InfoNavComponent } from './cmps/info-nav/info-nav.component';
import { InfoContentComponent } from './cmps/info-contant/info-contant.component';
import { ScheduleComponent } from './cmps/info-cmps/schedule/schedule.component';
import { DatesComponent } from './cmps/info-cmps/dates/dates.component';
import { WaysComponent } from './cmps/info-cmps/ways/ways.component';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { PaginationModule } from 'ngx-bootstrap/pagination';


import { DialogComponent } from './cmps/health/dialog/dialog.component';
import { DialogContantComponent } from './cmps/health/dialog-contant/dialog-contant.component';
import { DonationComponent } from './pages/donation/donation.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { GalleryCarouselComponent } from './cmps/gallery-carousel/gallery-carousel.component';
import { PhoneToolbarComponent } from './cmps/phone-toolbar/phone-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    HomeComponent,
    RegistrationComponent,
    InfoComponent,
    RunnersComponent,
    FooterComponent,
    ToolbarComponent,
    InfoNavComponent,
    InfoContentComponent,
    ScheduleComponent,
    DatesComponent,
    WaysComponent,
    DialogComponent,
    DialogContantComponent,
    DonationComponent,
    GalleryComponent,
    GalleryCarouselComponent,
    PhoneToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    PaginationModule,
    PaginationModule.forRoot(),

    MatProgressSpinnerModule,
    CarouselModule,

    // MatSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
