import { Injectable, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { getFirestore, setDoc, doc, getDocs, collectionData } from '@angular/fire/firestore';
import { Cliente } from '../interfaces/cliente';
import { addDoc, collection, query } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firestore = inject(AngularFirestore)

  constructor() { }

  // ============== database ============== //

  setCustomer(path: string, data: Cliente) {
    return addDoc(collection(getFirestore(), path), data)
  }

  getCustomers(path: string,collectionQuery?:any): any {
    const ref = collection(getFirestore(),path)
    return collectionData(query(ref,collectionQuery))
  }

}
