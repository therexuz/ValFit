import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core/components';
import { IonModal } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/interfaces/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit{
  
  @ViewChild(IonModal) modal?: IonModal;

  clientes: Cliente[] = [];
  form: FormGroup;

  constructor(private fb: FormBuilder, private clienteService: ClienteService) {

    this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      height: ['', [Validators.required, Validators.max(250)]],
      waist_size: ['', [Validators.required, Validators.max(200)]],
      weight:['',[Validators.required,Validators.max(350)]]
    });
  }

  ngOnInit(){
    this.clienteService.getClientes().subscribe(
      // Recibe los datos como un parámetro
      (data) => {
        // Asigna los datos a la variable
        this.clientes = data;
      }
    );
  }

  cancel() {
    this.modal!.dismiss(null, 'cancel');
    this.form.reset();
  }

  confirm() {
    let path = ''
    const customer: Cliente = this.form.value
    this.clienteService.saveCustomer(customer)
    this.form.reset();
    this.modal!.dismiss(this.form, 'confirm');
  }

  editarCliente(cliente:Cliente){
    console.log(cliente);
    
  }

  borrarCliente(cliente:Cliente){
    console.log(cliente);
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.modal!.dismiss(this.form)
    }
  }
}
