import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IInfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  private endpoint = "assets/data/data-pagina.json";

  constructor(private httpClient: HttpClient) { }

  getInfoPagina(): Observable<IInfoPagina> {
    return this.httpClient.get<IInfoPagina>(this.endpoint);
  }

  setInfoPaginaStorage(infoPagina: IInfoPagina): void {
    sessionStorage.setItem('infoPagina', JSON.stringify(infoPagina));
  }

  getInfoPaginaStorage(): IInfoPagina {
    return JSON.parse(sessionStorage.getItem('infoPagina')!);
  }

}
