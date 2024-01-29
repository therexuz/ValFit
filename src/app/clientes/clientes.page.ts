import { Component, OnInit, ViewChild } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core/components';
import { IonModal } from '@ionic/angular';

interface Cliente {
  foto: string; // El atributo foto es de tipo string
  nombre: string; // El atributo nombre es de tipo string
  edad: number; // El atributo edad es de tipo number
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  @ViewChild(IonModal) modal?: IonModal;
  
  clientes?: Cliente[];
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name?: string;
  age?: number;
  photo?: string;

  ngOnInit() {
    this.clientes = [
      {
        foto: 'assets/cliente1.jpg',
        nombre: 'Juan Pérez',
        edad: 25
      },
      {
        foto: 'assets/cliente2.jpg',
        nombre: 'María García',
        edad: 32
      },
      {
        foto: 'assets/cliente3.jpg',
        nombre: 'Pedro González',
        edad: 28
      }
    ]
  }
  loadPhoto() {}

  cancel() {
    this.modal!.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal!.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      console.log(this.age);
      console.log(this.name);
      this.clientes?.push({foto: 'https://example.com/foto.jpg', nombre: this.name!, edad: this.age!})
    }
  }
}
