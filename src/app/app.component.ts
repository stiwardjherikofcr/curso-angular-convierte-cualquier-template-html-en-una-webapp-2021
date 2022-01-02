import { Component } from '@angular/core';
import { IInfoPagina } from './interfaces/info-pagina.interface';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'portafolio-angular';

  constructor(private infoPaginaService: InfoPaginaService) {
    this.infoPaginaService.getInfoPagina().subscribe((data: IInfoPagina) => {
      this.infoPaginaService.setInfoPaginaStorage(data);
    });
  }

}
