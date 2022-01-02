import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IInfoPagina } from '../../interfaces/info-pagina.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  info: IInfoPagina = {};
  cargada = false;

  constructor(private infoPaginaService: InfoPaginaService, private router: Router) { }

  ngOnInit(): void {
    this.getInfoPagina();
  }

  getInfoPagina(): void {
    this.info = this.infoPaginaService.getInfoPaginaStorage();
    this.cargada = true;
  }

  buscarProducto(termino: string): void {
    if (termino.length < 1) {
      this.router.navigate(['/home']);
      return;
    }
    this.router.navigate(['/search', termino]);
  }

}
