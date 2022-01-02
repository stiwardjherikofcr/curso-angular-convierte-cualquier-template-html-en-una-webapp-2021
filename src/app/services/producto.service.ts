import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducto } from '../interfaces/producto.interface';
import { IProductoDescripcion } from '../interfaces/producto-descripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private endpoint = "https://portafolio-angular-3aeb5-default-rtdb.firebaseio.com";

  constructor(private httpClient: HttpClient) { }

  getProductos(): Observable<IProducto[]> {
    return this.httpClient.get<IProducto[]>(`${this.endpoint}/productos_idx.json`);
  }

  getProducto(id: string): Observable<IProductoDescripcion> {
    return this.httpClient.get<IProductoDescripcion>(`${this.endpoint}/productos/${id}.json`);
  }

}
