import { Component } from '@angular/core';
import { Formation } from '../entity/formation.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Theme } from '../entity/theme.model';
import { ThemeService } from '../services/theme.service';
import { FormationService } from '../services/formation.service';
import { Ressource } from '../entity/ressource.model';

@Component({
  selector: 'app-public-formation-detail',
  templateUrl: './public-formation-detail.component.html',
  styleUrls: ['./public-formation-detail.component.css']
})
export class PublicFormationDetailComponent {

  theme!:Theme;
  formation!:Formation;
  ressource!:Ressource[];
  formations!:Formation[];

  constructor(
    private formationService:FormationService,
    private route:ActivatedRoute,
    private router: Router
    //private location:Location
    
    ) {}

  ngOnInit():void{
    
    const id = Number(this.route.snapshot.paramMap.get('formationId')?.split('-')[0]);
    if(isNaN(id))
      this.router.navigate(['404']);
    
    this.formationService.searchFormationById(id).subscribe(
      {
        next : data => {  this.formation = data;
                          console.log(data);
                        }
                        //Ajouter gestion 404 des formations non trouvées
      }
    );
  }

}
