import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { FotoperfilComponent } from './componentes/fotoperfil/fotoperfil.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { LoginComponent } from './componentes/login/login.component';


imports: [
  BrowserModule,
  RouterModule.forRoot([
    {path: "login", component: LoginComponent },
  ])
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FotoperfilComponent,
    ExperienciaComponent,
    EducacionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
