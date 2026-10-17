import { Component, OnInit } from '@angular/core';
import { FORMATIONS } from './../../assets/mock_data/FORMATIONS';
import { Formation } from '../entity/formation.model';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit{

  formations:Formation[] = FORMATIONS;
  forms!:Array<any>;

  formationToShow:Formation = this.formations[0];

  constructor(private formationService:FormationService){}

  ngOnInit(): void {
    this.formationService.searchAllFormation().subscribe(
      {
        next : data => {  this.forms = data;
                          console.log(data);
                        }
      }
    );
    //alert(this.menuItems[0]);
  }

  showDetail(f:Formation) {
    if(f != undefined)
      this.formationToShow = f;
  }

  delete(f:Formation) {
    this.formations.splice(this.formations.indexOf(f), 1);
  }

}
