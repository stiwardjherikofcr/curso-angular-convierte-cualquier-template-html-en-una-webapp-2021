import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducto } from '../../interfaces/producto.interface';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  productos: IProducto[] = [];
  productosFiltrado: IProducto[] = [];

  constructor(private activatedRoute: ActivatedRoute, private productoService: ProductoService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.buscarProducto(params['termino']);
    });
  }

  buscarProducto(termino: string): void {
    if (this.productos.length === 0) {
      this.cargarProductos().then(() => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }
  }

  cargarProductos() {
    return new Promise<void>((resolve, reject) => {
      this.productoService.getProductos().subscribe((data: IProducto[]) => {
        this.productos = data;
        resolve();
      });
    });
  }

  filtrarProductos(termino: string) {
    this.productosFiltrado = this.productos.filter(producto => {
      return producto.categoria.toLocaleLowerCase().indexOf(termino.toLocaleLowerCase()) >= 0 || producto.titulo.toLocaleLowerCase().indexOf(termino.toLocaleLowerCase()) >= 0;
    });
  }

}
