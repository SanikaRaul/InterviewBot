import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { DetailsComponent } from './details/details.component';
import {InterviewserviceService} from './interviewservice.service';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';

//angular material



//angular material







import { FlexLayoutModule } from '@angular/flex-layout';


import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// For MDB Angular Free
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { GoogleChartsModule} from 'angular-google-charts';
import { ChartsModule } from 'ng2-charts';

import { MDBBootstrapModule} from 'angular-bootstrap-md';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ResultComponent } from './result/result.component';
import { StartinterviewComponent } from './startinterview/startinterview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DetailsComponent,
    ResultComponent,
    StartinterviewComponent
  ],
  imports: [


  BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatExpansionModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,  
    MatListModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MDBBootstrapModule,
    GoogleChartsModule,
    ChartsModule,
    CarouselModule,
    WavesModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCarouselModule.forRoot()

  ],
  providers: [InterviewserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
