import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEquipoTrabajo } from '../interfaces/equipo-trabajo.interface';

@Injectable({
  providedIn: 'root'
})
export class EquipoTrabajoService {

  private endpoint = "https://portafolio-angular-3aeb5-default-rtdb.firebaseio.com/equipo_trabajo.json";

  constructor(private httpClient: HttpClient) { }

  getEquipoTrabajo(): Observable<IEquipoTrabajo[]> {
    return this.httpClient.get<IEquipoTrabajo[]>(this.endpoint);
  }

}
