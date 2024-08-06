import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { alumnos } from "src/app/global/endpoints";
import { InsertAlumnosRequest, GetAlumnosResponse } from "@Models/alumno";

@Injectable({
  providedIn: "root",
})
export class PersonasService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({});
  }

  getPersons(): Observable<GetPersonasResponse> {
    const httpOptions = { headers: this.headers };
    return this.http
      .post<GetPersonasResponse>(persons.get, null, httpOptions)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  insertPersons(person: PersonInsertRequest): Observable<boolean> {
    const httpOptions = { headers: this.headers };
    return this.http.post<boolean>(persons.insert, person, httpOptions).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
