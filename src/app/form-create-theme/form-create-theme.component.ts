import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-form-create-theme',
  templateUrl: './form-create-theme.component.html',
  styleUrls: ['./form-create-theme.component.css']
})
export class FormCreateThemeComponent {

  monFormulaire: FormGroup;

  constructor(private formBuilder: FormBuilder, private themeService: ThemeService) {
    this.monFormulaire = this.formBuilder.group({
      nom: ['', Validators.required],
      description:['', Validators.required]
    });
  }

  onSubmit() {
    if (this.monFormulaire.valid) {
      
      console.log(this.monFormulaire.value);
      this.themeService.saveTheme(this.monFormulaire.value).subscribe({
        next: data => {console.warn("OK")
        
        this.showSuccessAlert('Theme ' + data.nom + ' créé');
        
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
