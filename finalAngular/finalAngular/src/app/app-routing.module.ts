import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowComponent } from './page/show/show.component';
import { EditComponent } from './page/edit/edit.component';


const routes: Routes = [
  {
    path:"edit/:id",
    component:EditComponent
  },
  {path:'show/:id', component:ShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
