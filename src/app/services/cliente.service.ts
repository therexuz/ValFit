import { Injectable } from '@angular/core';

import { Cliente } from '../interfaces/cliente';
import { FirebaseService } from './firebase.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  path = 'customers'
  private clientes$ = new BehaviorSubject<Cliente[]>([]);

  constructor(private firebaseSvc: FirebaseService) {
    this.loadCustomers();
  }

  loadCustomers(): any {
    this.firebaseSvc.getCustomers(this.path).subscribe(
      // Recibe los datos como un parámetro
      (data: any) => {
        // Emite los datos a través del observable
        this.clientes$.next(data);
      }
    );
  }

  saveCustomer(new_customer: Cliente) {
    this.firebaseSvc.setCustomer(this.path, new_customer)
  }

  getClientes() {
    return this.clientes$.asObservable();
  }
}
