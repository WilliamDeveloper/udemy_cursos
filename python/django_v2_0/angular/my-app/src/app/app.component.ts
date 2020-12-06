import { Component, OnInit } from '@angular/core';
import { Autores } from './models/autores.model';
import { AutorService } from './services/autor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  autores:Autores[];
  constructor(private autorService:AutorService){}

  ngOnInit(){
    return this.autorService.getAutores()
    .subscribe(data=>this.autores = data);
  }

}
