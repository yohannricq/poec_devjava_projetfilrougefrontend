import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Theme } from '../entity/theme.model';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private REST_API_SERVER = "http://localhost:8080";

  private httpOptions = {

    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

    constructor(private http: HttpClient) { }
    
    /**
     * Search Formations by title
     * 
     */
    findAllTheme(): Observable<Theme[]>{
        //return this.http.get<Formation[]>('/backoffice/api/formations');
        //https://api.publicapis.org/entries
        //return this.http.get<Formation[]>('https://api.publicapis.org/entries');
        return this.http.get<Theme[]>(this.REST_API_SERVER+'/api/themesForMenu');
    }

    findTheme(id:number): Observable<Theme>{
      return this.http.get<Theme>(this.REST_API_SERVER+'/api/themes/'+id);
    }

    saveTheme(theme: Theme): Observable<Theme>{
      let url = this.REST_API_SERVER+'/api/themes';
      console.log(theme);
      return this.http.post<Theme>(url, theme, this.httpOptions);
  }
}
