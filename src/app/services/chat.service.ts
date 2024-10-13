import { Injectable } from '@angular/core';
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-database';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messagesSubject = new BehaviorSubject<any[]>([]);

  constructor() {
    this.listenToMessages();
  }

  private listenToMessages() {
    firebase().database().ref('messages').on('value', snapshot => {
      const messages = [];
      snapshot.forEach(childSnapshot => {
        messages.push(childSnapshot.val());
      });
      this.messagesSubject.next(messages);
    });
  }

  getMessages() {
    return this.messagesSubject.asObservable();
  }

  sendMessage(text: string, isAiResponse: boolean = false) {
    const message = {
      text,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      senderId: firebase().auth().currentUser.uid,
      isAiResponse
    };
    return firebase().database().ref('messages').push(message);
  }
}