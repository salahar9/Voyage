import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { TourDetailComponent } from './tour-detail/tour-detail.component';
const routes: Routes = [
  { path: 'voyagedet', component: TourDetailComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
