import { Observable, throwError } from "rxjs";
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

export class BaseHttpService<T>{

    endpoint = '';
    headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private httpClient: HttpClient, private baseUrl: string, private controller: string) {
        this.endpoint = baseUrl + '/api/' + controller + '/';
    }
    get(id: number): Observable<T> | T {
        return this.httpClient.get<T>(this.endpoint + '/' + id, { headers: this.headers })
            .pipe(
                tap( // Log the result or error
                    data => {
                        // choose to log
                    },
                    error => this.handleError(error)
                )
            );
    }

    getAll(): Observable<T[]> | T[] {

        return this.httpClient.get<T[]>(this.endpoint, { headers: this.headers })
            .pipe(
                tap( // Log the result or error
                    data => {
                        // choose to log                        
                    },
                    error => this.handleError(error)
                )
            );
    }

    put(item: T): Observable<T> | T {
        return this.httpClient.put<T>(this.endpoint + 'all', JSON.stringify(item), { headers: this.headers })
            .pipe(
                tap( // Log the result or error
                    data => {
                        // choose to log
                    },
                    error => this.handleError(error)
                )
            );
    }

    post(item: T): Observable<any> | any {
        return this.httpClient.post<any>(this.endpoint, JSON.stringify(item), { headers: this.headers })
            .pipe(
                tap( // Log the result or error
                    data => {
                        // choose to log
                    },
                    error => this.handleError(error)
                )
            );
    }

    delete(id: number): Observable<void> | any {
        return this.httpClient.delete(this.endpoint + '/' + id, { headers: this.headers })
            .pipe(
                tap( // Log the result or error
                    data => {
                        // choose to log
                    },
                    error => this.handleError(error)
                )
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    };
}