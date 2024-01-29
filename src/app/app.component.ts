import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Clientes', url: 'clientes', icon: 'person' },
    { title: 'Reportes', url: 'reportes', icon: 'newspaper' }
  ];
  constructor() {}
}
