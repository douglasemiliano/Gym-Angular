import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppService } from './app.service';


import { routes } from './routes';
import { ListFuncionarioComponent } from './funcionario/list-funcionario/list-funcionario.component';
import { NewFuncionarioComponent } from './funcionario/new-funcionario/new-funcionario.component';
import { FuncionarioService } from './funcionario/funcionario.service';
import { ShowFuncionarioComponent } from './funcionario/show-funcionario/show-funcionario.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { EditFuncionarioComponent } from './funcionario/edit-funcionario/edit-funcionario.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FormEquipamentoComponent } from './equipamento/form-equipamento/form-equipamento.component';
import { ViewEquipamentoComponent } from './equipamento/view-equipamento/view-equipamento.component';
import { ListEquipamentoComponent } from './equipamento/list-equipamento/list-equipamento.component';

@NgModule({
  declarations: [
    AppComponent,
    ListFuncionarioComponent,
    NewFuncionarioComponent,
    ShowFuncionarioComponent,
    EditFuncionarioComponent,
    FormEquipamentoComponent,
    ViewEquipamentoComponent,
    ListEquipamentoComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AppService,
    FuncionarioService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
