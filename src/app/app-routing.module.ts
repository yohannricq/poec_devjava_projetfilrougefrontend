import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { FormationsComponent } from './formations/formations.component';
import { PublicThemeDetailComponent } from './public-theme-detail/public-theme-detail.component';
import { PublicFormationDetailComponent } from './public-formation-detail/public-formation-detail.component';
import { AdminWrapperComponent } from './admin-wrapper/admin-wrapper.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { PublicWrapperComponent } from './public-wrapper/public-wrapper.component';
import { FormCreateThemeComponent } from './form-create-theme/form-create-theme.component';
import { FormCreateFormationComponent } from './form-create-formation/form-create-formation.component';
import { FormulaireInscriptionComponent } from './formulaire-inscription/formulaire-inscription.component';

const routes: Routes = [

  { path: 'admin', component: AdminWrapperComponent, children: [
      // This component is an admin page
      { path: 'home', component: AdminHomeComponent},
      { path : 'theme/create', component: FormCreateThemeComponent},
      { path : 'formation/create', component: FormCreateFormationComponent}
    ]
  },
  { path: '', component: PublicWrapperComponent, children: [
      // This component is an admin page
      { path: 'formations/:themeId/:formationId', component: PublicFormationDetailComponent },
      { path: 'formations/:themeId', component: PublicThemeDetailComponent },
      { path: 'formations', component: FormationsComponent },
      { path: 'inscription', component: FormulaireInscriptionComponent }
    ]
  },
  //{ path: '', redirectTo: 'formations', pathMatch: 'full' },
  { path: '404', component: Error404Component},
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
