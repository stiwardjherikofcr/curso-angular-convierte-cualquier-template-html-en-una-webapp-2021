import { Component, OnInit } from '@angular/core';
import { IProducto } from '../../interfaces/producto.interface';
import { ProductoService } from '../../services/producto.service';


@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  productos: IProducto[] = [];
  cargando = true;

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.getProductos().subscribe((data: IProducto[]) => {
      this.productos = data;
      this.cargando = false;
    });
  }

}
