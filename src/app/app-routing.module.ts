import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'select',
    pathMatch: 'full',
  },
  { path: 'select', component: ListComponent },
  { path: 'result', component: ResultComponent, data: { p1: "", p2: "" } },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
