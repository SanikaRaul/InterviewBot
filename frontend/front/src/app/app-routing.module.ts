import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ResultComponent } from './result/result.component';
import {DetailsComponent} from './details/details.component';
import { StartinterviewComponent} from './startinterview/startinterview.component';




const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "details", component: DetailsComponent },
  { path: "result", component:ResultComponent },
  { path: "startinterview" , component:StartinterviewComponent}
  ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



