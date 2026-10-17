import { Formation } from './entity/formation.model';
import { Component } from '@angular/core';
import { FormationService } from './services/formation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fil_rouge';

  formations:Formation[] = [];

  constructor(private fService: FormationService) {}

  ngOnInit() {
    this.fService.searchAllFormation().subscribe((data: any[]) => {
      console.log(data);
      this.formations = data;
    })
  }

}
