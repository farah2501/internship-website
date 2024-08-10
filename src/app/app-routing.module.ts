import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { NewlistComponent } from './newlist/newlist.component';
import { NewformComponent } from './newform/newform.component';

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'list', component: ListComponent},
  {path: 'form', component: FormComponent},
  {path: 'newlist', component: NewlistComponent},
  {path: 'newform', component: NewformComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
