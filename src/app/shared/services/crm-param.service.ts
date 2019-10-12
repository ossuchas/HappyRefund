import { Injectable } from '@angular/core';
import { CrmParam } from '../models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CrmParamService {
    constructor(private http: HttpClient) {}

    formData: CrmParam;

    // Base url
    readonly APIUrl = environment.apiUrl;

    // Http Headers
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    private _listeners = new Subject<any>();

    getReasonRejectMasterList(): Observable<CrmParam[]> {
        return this.http.get<CrmParam[]>(this.APIUrl + '/crmparamlist');
    }

    // Error handling
    errorHandl(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
    listen(): Observable<any> {
        return this._listeners.asObservable();
    }
    filter(filterBy: string) {
        this._listeners.next(filterBy);
    }
}
