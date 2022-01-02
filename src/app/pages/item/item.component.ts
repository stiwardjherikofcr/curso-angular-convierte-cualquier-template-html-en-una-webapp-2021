import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { IProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto?: IProductoDescripcion;
  id?: string;

  constructor(private activatedRoute: ActivatedRoute, private productoService: ProductoService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productoService.getProducto(params['id']).subscribe((producto: IProductoDescripcion) => {
        this.id = params['id'];
        this.producto = producto;
      });
    });
  }

}
