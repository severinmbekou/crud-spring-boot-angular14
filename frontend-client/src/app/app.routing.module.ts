import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {CreateEmployeeComponent} from './create-employee/create-employee.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';
import {AuthGuard} from "./guards/auth/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: 'employee', pathMatch: 'full'},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'add', component: CreateEmployeeComponent, canActivate: [AuthGuard]},
  {path: 'update/:id', component: UpdateEmployeeComponent, canActivate: [AuthGuard]},
  {path: 'details/:id', component: EmployeeDetailsComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
