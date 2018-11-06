import { Component, OnInit } from '@angular/core';
import { Vinilo } from '../vinilo';
import { ViniloService } from '../vinilo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vinilo',
  templateUrl: './vinilo.component.html',
  styleUrls: [ './vinilo.component.css']
})
export class ViniloComponent implements OnInit {

  constructor(private viniloService : ViniloService, private routes: ActivatedRoute) { }

  vinilo : Vinilo;

  getVinilos(id:number): void{
    this.viniloService.getVinilos().subscribe(vinilos => 
        {
            
            
            this.vinilo = vinilos.filter(obj=>{ return obj.id == id})[0];
        
        
        
        })
  }

  ngOnInit() {
    let viniloId = +this.routes.snapshot.paramMap.get('id'); 
    this.getVinilos(viniloId);
  }

}