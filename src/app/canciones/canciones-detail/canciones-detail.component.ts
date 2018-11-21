import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Canciones } from '../canciones';
import { CancionesService } from '../canciones.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cancion-detail',
  templateUrl: './canciones-detail.component.html',
  styleUrls: [ './canciones-detail.component.css']
})
export class CancionComponent implements OnInit {

  constructor(private service : CancionesService,private routes : ActivatedRoute) { }

  @Input () cancion : Canciones;
  tipo : string;
  @Input() id:number;

  showCreate: boolean;

  showCreates: boolean;
  
  showHideCreate(): void {
    this.showCreate = !this.showCreate;
}

  showHideCreates(): void {
    this.showCreates = !this.showCreates;
  }
  
  getCancion(): void{
    this.service.getCanciones(+this.routes.snapshot.paramMap.get('id')+'/canciones').subscribe((vinilos: Canciones[]) =>
    {this.cancion = vinilos.filter(obj=>{ return obj.id == this.id})[0]})
  }

  ngOnInit() {
    this.getCancion();
    this.tipo = 'vinilos/'+this.routes.snapshot.paramMap.get('id')+'/canciones';
  }

}