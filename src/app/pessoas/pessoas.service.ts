import { Injectable } from '@angular/core' 
import { Observable } from 'rxjs'
import { Http} from "@angular/http"  
import { map } from "rxjs/operators";
import { PessoasComponent } from './pessoas.component';
 

@Injectable()
export class PessoasService {

  private http : Http;

  constructor( http : Http ) { 
    this.http = http;
  }

  listarPessoas() {
    return this.http
    .get("https://randomuser.me/api/?nat=br&results=5").
    pipe( 
      map( x =>  x.json() )
    )
  }
}
