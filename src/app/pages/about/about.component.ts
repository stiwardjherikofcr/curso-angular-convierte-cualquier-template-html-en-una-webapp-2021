import { Component, OnInit } from '@angular/core';
import { IEquipoTrabajo } from '../../interfaces/equipo-trabajo.interface';
import { EquipoTrabajoService } from '../../services/equipo-trabajo.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  equipo_trabajo: IEquipoTrabajo[] = [];

  constructor(private equipoTrabajoService: EquipoTrabajoService) { }

  ngOnInit(): void {
    this.getEquipoTrabajo();
  }

  getEquipoTrabajo(): void {
    this.equipoTrabajoService.getEquipoTrabajo().subscribe((data: IEquipoTrabajo[]) => {
      this.equipo_trabajo = data;
    });
  }

}
