//AQUI SE MANEJAN LAS RUTAS DE LA APP

import { HomeComponent } from '../app-utils-module/home/home.component'
import { SearchBarComponent } from '../app-utils-module/searchbar/searchbar.component';
import { TransaccionListComponent } from '../transaccion/transaccion-list/transaccion-list.component';
import { ComentarioListComponent } from '../comentario/comentario-list/comentario-list.component';




export const routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'map', component: SearchBarComponent, pathMatch: 'full'},
    { path: 'transacciones', component: TransaccionListComponent , pathMatch: 'full' },
    { path: 'comentarios', component: ComentarioListComponent , pathMatch: 'full' }
  ]