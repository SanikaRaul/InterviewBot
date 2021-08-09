import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
slides = [{'image': './assets/Slide1.jpeg'},{'image': './assets/Slide2.jpeg'}]

  constructor() { }

  ngOnInit(): void {
  }

}
