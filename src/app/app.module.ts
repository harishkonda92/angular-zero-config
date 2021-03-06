import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { router } from '../app.routing';
import { MaterialModule } from './app.styles';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { ContentResolver } from './content/content.resolver';
import { StoreModuler } from './ngrx-store/store.module';
import { EffectsModuler } from './ngrx-effetcs/effetcs.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    WelcomeComponent,
    NavigationComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    router,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModuler,
    EffectsModuler,
  ],
  providers: [ ContentResolver ],
  bootstrap: [AppComponent]
})
export class AppModule { }
