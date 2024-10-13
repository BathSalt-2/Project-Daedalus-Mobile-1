import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { NativeScriptFormsModule } from '@nativescript/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { ProjectsComponent } from './projects/projects.component';
import { AuthService } from './services/auth.service';
import { ChatService } from './services/chat.service';
import { ProjectService } from './services/project.service';
import { AiService } from './services/ai.service';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    ProjectsComponent
  ],
  providers: [
    AuthService,
    ChatService,
    ProjectService,
    AiService
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}