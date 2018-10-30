import { Routes } from '@angular/router';

import { ListFuncionarioComponent } from './funcionario/list-funcionario/list-funcionario.component';
import { NewFuncionarioComponent } from './funcionario/new-funcionario/new-funcionario.component';
import { ShowFuncionarioComponent } from './funcionario/show-funcionario/show-funcionario.component';
import { EditFuncionarioComponent } from './funcionario/edit-funcionario/edit-funcionario.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'funcionarios' , component: ListFuncionarioComponent},
  { path: 'funcionarios/new', component: NewFuncionarioComponent},
  { path: 'funcionarios/:id', component: ShowFuncionarioComponent},
  { path: 'funcionarios/edit/:id', component: EditFuncionarioComponent},
  { path: 'dashboard', component: DashboardComponent}

];
