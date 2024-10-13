import { Injectable } from '@angular/core';
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {
    firebase().initializeApp();
  }

  signIn(email: string, password: string) {
    return firebase().auth().signInWithEmailAndPassword(email, password);
  }

  signUp(email: string, password: string) {
    return firebase().auth().createUserWithEmailAndPassword(email, password);
  }

  signOut() {
    return firebase().auth().signOut();
  }

  getCurrentUser() {
    return firebase().auth().currentUser;
  }
}