import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulaire-inscription',
  templateUrl: './formulaire-inscription.component.html',
  styleUrls: ['./formulaire-inscription.component.css']
})
export class FormulaireInscriptionComponent {

  registerForm!: FormGroup;
  
  submitted = false;
  selectFormation:FormControl = new FormControl()
 

constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, 
  private router: Router) { }
  ngOnInit() {
    this.registerForm=this.formBuilder.group({
      nom : ['', Validators.required],
      prenom: ['', Validators.required],
      statut: ['', Validators.required],
    });
    
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
}
}
