import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { ActivatedRoute } from '@angular/router';
import { Theme } from '../entity/theme.model';

@Component({
  selector: 'app-public-theme-detail',
  templateUrl: './public-theme-detail.component.html',
  styleUrls: ['./public-theme-detail.component.css']
})
export class PublicThemeDetailComponent implements OnInit {

  theme!:Theme;

  constructor(
    private themeService:ThemeService,
    private route:ActivatedRoute
    //private location:Location
    
    ) {}

  ngOnInit():void{

    //const id = Number(this.route.snapshot.paramMap.get('themeId'));
    const id = Number(this.route.snapshot.paramMap.get('themeId')?.split('-')[0]);
    //alert("id:"+id);
    this.themeService.findTheme(id).subscribe(
      {
        next : data => {  this.theme = data;
                          console.log(data);
                        }
      }
    );
  }

  getRandomImg():String {
    return "../../assets/img/"+Math.floor((Math.random()*6)+1)+".jpg";
  }

}
