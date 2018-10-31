import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CregistrationComponent } from './registration/cregistration/cregistration.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: CregistrationComponent},
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
