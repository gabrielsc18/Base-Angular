import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ExampleContryService {

  endpoint = 'http://localhost:3000/api/v1/';
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


  constructor(private http : HttpClient) {

  }

  //Ejemplo de get actualmente funciona
  getCountry(): Observable<any> {
    return this.http.get("https://restcountries.eu/rest/v2/name/eesti").pipe(
      map(data => data)
    )
   }

   //Es solo ejemplo de post no funciona
   addCountry (product): Observable<any> {
    console.log(product);
    return this.http.post<any>(this.endpoint + 'products', JSON.stringify(product), this.httpOptions).pipe(
      tap((product) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<any>('addProduct'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
