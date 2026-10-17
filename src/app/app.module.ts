import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormationsComponent } from './formations/formations.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { HeroComponent } from './hero/hero.component';
import { FilArianeComponent } from './fil-ariane/fil-ariane.component';
import { Error404Component } from './error404/error404.component';
import { PublicThemeDetailComponent } from './public-theme-detail/public-theme-detail.component';
import { PublicFormationDetailComponent } from './public-formation-detail/public-formation-detail.component';
import { ReplacePipe } from './pipe/ReplacePipe';
import { AdminWrapperComponent } from './admin-wrapper/admin-wrapper.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { PublicWrapperComponent } from './public-wrapper/public-wrapper.component';
import { FormCreateThemeComponent } from './form-create-theme/form-create-theme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormCreateFormationComponent } from './form-create-formation/form-create-formation.component';
import { FormulaireInscriptionComponent } from './formulaire-inscription/formulaire-inscription.component';


@NgModule({
  declarations: [
    AppComponent,
    FormationsComponent,
    MenuComponent,
    HeroComponent,
    FilArianeComponent,
    Error404Component,
    PublicThemeDetailComponent,
    PublicFormationDetailComponent,
    ReplacePipe,
    AdminWrapperComponent,
    AdminHomeComponent,
    PublicWrapperComponent,
    FormCreateThemeComponent,
    FormCreateFormationComponent,
    FormulaireInscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
