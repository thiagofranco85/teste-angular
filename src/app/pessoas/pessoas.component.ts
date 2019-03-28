import { Component, OnInit, Injectable } from '@angular/core';
import { PessoasService } from './pessoas.service';

@Injectable()

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html' 
})
export class PessoasComponent implements OnInit {

  public pessoas;

  constructor( private pessoaService : PessoasService ) {     
    this.pessoaService = pessoaService;        
  }

  ngOnInit() { 
    this.pessoaService.listarPessoas().subscribe( y => this.pessoas = y.results );     
    console.log(this.pessoas); 
  }

}
