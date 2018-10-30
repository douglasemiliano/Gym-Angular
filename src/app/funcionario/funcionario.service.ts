import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Funcionario } from './funcionario';
import { AppService } from '../app.service';
import { ApiService } from '../api.service';
import { RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FuncionarioService implements OnInit {


  constructor(private appService: AppService, private apiService: ApiService) {}

  ngOnInit() {

  }

  add(funcionarioj): any {

    return this.apiService.post('funcionarios', funcionarioj);
  }

  getById(id: any): Observable<any>{

    return this.apiService.getById('funcionarios',id);

  }

  private handleError(error: any): Promise<Array<any>> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }


  // Simulate DELETE /books/:id
  delete(id: number): any {
    console.log('delete service');
    return this.apiService.delete('funcionarios/', id);
  }

  // Simulate PUT /books/:id
  update(newFuncionario: Funcionario, id: number) {
    return this.apiService.put('funcionarios/' + id, newFuncionario);
  }

  // Simulate GET /books
  getAll(): any {
    return this.apiService.getAll();
  }

  // // Simulate GET /books/:id
  // getById(id: number): Funcionario {
  //   return this.funcionario
  //     .filter(funcionario => funcionario.id === id)
  //     .pop();
  // }

  changeMessage(message: string) {
    this.appService.changeMessage(message);
  }

  clearMessage() {
    this.appService.clearMessage();
  }

}
