import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CSVComponent } from './csv/csv.component';
import { TableDataComponent } from './table-data/table-data.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  //{ path:'',component:MainComponent},
  // { path:'',component:MainComponent},
  { path:'table', component:TableDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
