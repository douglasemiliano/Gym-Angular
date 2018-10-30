import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { FuncionarioService } from '../funcionario.service';
//import { Funcionario } from '../funcionario';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-list-funcionario',
  templateUrl: './list-funcionario.component.html',
  styleUrls: ['./list-funcionario.component.css']
})
export class ListFuncionarioComponent implements OnInit {

  message: string;
  funcionario: Array<any> = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: FuncionarioService,
    private api: ApiService) {
  }

  ngOnInit() {

    this.service.getAll().subscribe(data => {
      this.funcionario = data;});

  }

  getFuncionario() {
    this.funcionario = this.service.getAll();
  }

  reload() {
    alert('Apagado com sucesso!');
    window.location.reload();
  }

  show(id) {
    this.service.clearMessage();
    this.router.navigate(['/funcionario', id]);
    return false;
  }

  edit(id) {
    this.service.clearMessage();
    this.router.navigate(['/funcionario/edit/', id]);
    return false;
  }

  destroy(id) {
    if (confirm('Tem certeza?')) {
      this.service.delete(+id);
      this.service.changeMessage('Funcionario foi deletado');
      this.reload();
    }
    return false;
  }

}
