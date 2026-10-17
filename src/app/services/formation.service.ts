import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Formation } from "../entity/formation.model";

@Injectable({
  providedIn: 'root'
})
export class FormationService {

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
    searchAllFormation(): Observable<Formation[]>{
        //return this.http.get<Formation[]>('/backoffice/api/formations');
        //https://api.publicapis.org/entries
        //return this.http.get<Formation[]>('https://api.publicapis.org/entries');
        return this.http.get<Formation[]>(this.REST_API_SERVER+'/api/formations');
    }

        /**
     * Search Formations by title
     * @param id
     */
        searchFormationById(id: number): Observable<Formation>{
          return this.http.get<Formation>(this.REST_API_SERVER+'/api/formations/'+id);
  }

    /**
     * Save a new Formation object in the Backend server data base.
     * @param Formation
     */
     saveFormation(formation: Formation): Observable<Formation>{
         
      return this.http.post<Formation>(this.REST_API_SERVER + '/api/formations', formation, this.httpOptions);
     }
     
    /**
     * Update an existing Formation object in the Backend server data base.
     * @param Formation
     */
    /*
    updateFormation(Formation: Formation): Observable<Formation>{
        return this.http.put<Formation>('/library/api/formations/');
    }*/
    
    /**
     * Delete an existing Formation object in the Backend server data base.
     * @param Formation
     */
    deleteFormation(Formation: Formation): Observable<string>{
        return this.http.delete<string>('/library/api/formations/'+Formation.id);
    }
     

}
