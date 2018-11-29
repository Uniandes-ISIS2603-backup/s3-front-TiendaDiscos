import { Injectable } from  '@angular/core';
import {  HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BillingInformation } from './billinginformation';
import { environment } from '../../environments/environment.prod';
import { LoginService } from '../UsuariosModule/services/login.service';


/**
 * URL para hacer la peticion HTTP
 */
const API_URL = environment.apiUrl;
//const BILLINGS = "/billing"
/**
 * El servicio que utiliza el modulo BillingInformation
 */
@Injectable()
export class BillingInformationService {

    /**
     * Constructor del servicio
     * @param http -Requerido para pedir en la peticion de una lista de BillingInformation
     */
    constructor(private http: HttpClient, private loginService:LoginService ){ }

    /**
     * Obtiene todos los BillingInformation, que en este caso solo es uno
     */
    getBillingInformation(): Observable<BillingInformation>{
        return this.http.get<BillingInformation>(API_URL+`usuarios/${this.loginService.currentUser.id}/billing`);
    }

    postBillingInformation(billing:BillingInformation, usuarioId:number): Observable<BillingInformation>{
        return this.http.post<BillingInformation>(API_URL+`usuarios/${usuarioId}/billing`,billing)
    }
} 