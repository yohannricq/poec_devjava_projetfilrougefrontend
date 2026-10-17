import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormationService } from '../services/formation.service';
import { ThemeService } from '../services/theme.service';
import { Theme } from './../entity/theme.model';

@Component({
  selector: 'app-form-create-formation',
  templateUrl: './form-create-formation.component.html',
  styleUrls: ['./form-create-formation.component.css']
})
export class FormCreateFormationComponent {

  monFormulaire: FormGroup;
  themes!:Array<Theme>;

  themeSelected!: Theme;

  constructor(private formBuilder: FormBuilder, private formationService: FormationService, private themeService: ThemeService) {
    this.monFormulaire = this.formBuilder.group({
      nom: ['', Validators.required],
      lieu:['', Validators.required],
      detail: ['', Validators.required],
      description:['', Validators.required],
      theme:[this.themeSelected, Validators.required],
      prixHt:['', Validators.required],
      duree:['', Validators.required]
    });

    themeService.findAllTheme().subscribe(
      {
        next : data => {  
          
          this.themes = data;
          
          console.log("themes :")
          console.log(this.themes);
        }
      }
    );
  }

  onSubmit() {
    if (this.monFormulaire.valid) {
      
      console.log("themeSelected");
      console.log(this.themeSelected);

      console.log("Données du formulaire");
      console.log(this.monFormulaire.value);
      
      this.formationService.saveFormation(this.monFormulaire.value).subscribe({
        next: data => {
          
          this.showSuccessAlert("Formation " + data.nom + " créé");
        },
        error: err => {console.warn(err)}
      })
    }
  }

  showSuccessAlert(message: string) {
    const alertContainer = document.getElementById('alert-container');
  
    if (alertContainer) {
      const alertDiv = document.createElement('div');
      alertDiv.classList.add('alert', 'alert-success', 'alert-dismissible', 'fade', 'show');
      alertDiv.innerHTML = `
        <strong>Success !</strong> ${message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      `;
  
      alertContainer.appendChild(alertDiv);
  
      // Ferme l'alert après quelques secondes
      setTimeout(() => {
        alertDiv.classList.remove('show');
        setTimeout(() => {
          alertContainer.removeChild(alertDiv);
        }, 500);
      }, 5000);
    }
  }
}
