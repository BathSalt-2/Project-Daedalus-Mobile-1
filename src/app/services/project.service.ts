import { Injectable } from '@angular/core';
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-database';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsSubject = new BehaviorSubject<any[]>([]);

  constructor() {
    this.listenToProjects();
  }

  private listenToProjects() {
    firebase().database().ref('projects').on('value', snapshot => {
      const projects = [];
      snapshot.forEach(childSnapshot => {
        projects.push(childSnapshot.val());
      });
      this.projectsSubject.next(projects);
    });
  }

  getProjects() {
    return this.projectsSubject.asObservable();
  }

  createProject(project: any) {
    return firebase().database().ref('projects').push(project);
  }

  updateProject(projectId: string, updates: any) {
    return firebase().database().ref(`projects/${projectId}`).update(updates);
  }
}