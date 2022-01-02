import { Component, OnInit } from '@angular/core';
import { IInfoPagina } from '../../interfaces/info-pagina.interface';
import { InfoPaginaService } from '../../services/info-pagina.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();
  info: IInfoPagina = {};
  cargada = false;

  constructor(private infoPaginaService: InfoPaginaService) { }

  ngOnInit(): void {
    this.getInfoPagina();
  }

  getInfoPagina(): void {
    this.info = this.infoPaginaService.getInfoPaginaStorage();
    this.cargada = true;
  }

}
