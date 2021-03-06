import { Component, OnInit,Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Vinilo } from '../../vinilo/vinilo';
import { ViniloService } from '../../vinilo/vinilo.service';
import { CarritoComprasService } from '../carrito-compras.service';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'list-vinilosCarritoCompras',
  templateUrl: './vinilo-list.component.html',
  styleUrls: [ './vinilo-list.component.css']
})
export class ViniloListComponent implements OnInit, OnChanges {

  constructor(private carritoComprasService: CarritoComprasService, private router: Router, private toastrService: ToastrService) { }

  @Input() vinilos: Vinilo[];
  @Output() update = new EventEmitter();
  salir:boolean;

eliminarDelCarrito(vinilo: Vinilo){
  
this.carritoComprasService.eliminarViniloDeCarritoCompras(vinilo.id).subscribe();
this.ngOnChanges();  
this.toastrService.success("El vinilo fue eliminado del carrito.", "Vinilo");this.update.emit();


}
  ngOnInit() {
    this.salir=false;
    this.carritoComprasService.getCarritoComprasDetail().subscribe((u)=>{ this.vinilos=u.vinilos; });

  }
  verVinilo(id:number){
    this.router.navigate(["/vinilos/"+id]);
  }
  ngOnChanges() {
   this.ngOnInit();
  }

}
