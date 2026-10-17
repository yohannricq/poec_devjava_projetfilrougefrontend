import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { MENUITEMS } from 'src/assets/mock_data/MENUITEMS';
import { Theme } from '../entity/theme.model';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  menuItems!:Array<any>;
  
  constructor(private themeService:ThemeService) {}

  ngOnInit():void{
    this.themeService.findAllTheme().subscribe(
      {
        next : data => {  this.menuItems = data;
                          console.log(data);
                        }
      }
    );
  }
}
