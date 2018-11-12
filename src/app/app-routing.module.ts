import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { AdvancedGridComponent } from './advanced-grid/advanced-grid.component';
import { LazyloadingWithFilterComponent } from './lazyloading-with-filter/lazyloading-with-filter.component';

const routes: Routes = [
  { path: '', redirectTo: 'clientSide',pathMatch:'full' },
  { path: 'clientSide', component: BasicTableComponent },
  { path: 'serverSide/Sorting', component: AdvancedGridComponent },
  { path: 'serverSide/Soring-Filtering', component: LazyloadingWithFilterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
