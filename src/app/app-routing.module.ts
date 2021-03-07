import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { DetailsComponent } from './details/details.component';
import { ResultComponent } from './result/result.component';






const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "details", component: DetailsComponent },
  { path: "result", component:ResultComponent }
  ];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
