import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { DetailsComponent } from './details/details.component';
import {InterviewserviceService} from './interviewserviceservice.service';


//angular material

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DetailsComponent
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
    BrowserAnimationsModule






  ],
  providers: [InterviewserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
