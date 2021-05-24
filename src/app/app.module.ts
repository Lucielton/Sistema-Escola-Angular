import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AlunoModuleModule } from './aluno-module/aluno-module.module';
import { MatriculaModuleModule } from './matricula-module/matricula-module.module';
import { CursoModuleModule } from './curso-module/curso-module.module';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './core/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './core/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CursoModuleModule,
    MatriculaModuleModule,
    AlunoModuleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
