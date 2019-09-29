import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { CrmContactRefund } from '../models';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CrmcontactrefundService {
    constructor(private http: HttpClient) {}

    formData: CrmContactRefund;

    // Base url
    readonly APIUrl = environment.apiUrl;

    // Http Headers
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    private _listeners = new Subject<any>();

    // Get All Refund List
    getRefundList(): Observable<CrmContactRefund[]> {
        return this.http.get<CrmContactRefund[]>(this.APIUrl + '/refundlist');
    }

    // For TF02
    // Get All Customer Sent Document List
    getCSSentList(): Observable<CrmContactRefund[]> {
        return this.http.get<CrmContactRefund[]>(this.APIUrl + '/cssentlist');
        // return this.http.get<CrmContactRefund[]>(APIENDPOINT_URL + '/cssentlist');
    }

    // Get All Status List
    getTF01AllList(): Observable<CrmContactRefund[]> {
        return this.http.get<CrmContactRefund[]>(this.APIUrl + '/tf01alllist');
    }

    // PUT
    updateTF01Status(data): Observable<CrmContactRefund> {
        return this.http.put<CrmContactRefund>(this.APIUrl + '/tf01approved/' + data.hyrf_id, JSON.stringify(data), this.httpOptions).pipe(
            retry(1),
            catchError(this.errorHandl)
        );
    }

    // For TF02
    // Get All Customer Sent Document List
    getTF01ApprovedList(): Observable<CrmContactRefund[]> {
        return this.http.get<CrmContactRefund[]>(this.APIUrl + '/tf01appvlist');
    }

    // Get All Status List
    getTF02AllList(): Observable<CrmContactRefund[]> {
        return this.http.get<CrmContactRefund[]>(this.APIUrl + '/tf02alllist');
    }

    // PUT
    updateTF02Status(data): Observable<CrmContactRefund> {
        return this.http.put<CrmContactRefund>(this.APIUrl + '/tf02approved/' + data.hyrf_id, JSON.stringify(data), this.httpOptions).pipe(
            retry(1),
            catchError(this.errorHandl)
        );
    }

    // For AC01
    // Get All Customer Sent Document List
    getTF02ApprovedList(): Observable<CrmContactRefund[]> {
        return this.http.get<CrmContactRefund[]>(this.APIUrl + '/tf02appvlist');
    }

    // Get All Status List
    getAC01AllList(): Observable<CrmContactRefund[]> {
        return this.http.get<CrmContactRefund[]>(this.APIUrl + '/ac01alllist');
    }

    // PUT
    updateAC01Status(data): Observable<CrmContactRefund> {
        return this.http.put<CrmContactRefund>(this.APIUrl + '/ac01approved/' + data.hyrf_id, JSON.stringify(data), this.httpOptions).pipe(
            retry(1),
            catchError(this.errorHandl)
        );
    }

    // For AC02
    // Get All Customer Sent Document List
    getAC01ApprovedList(): Observable<CrmContactRefund[]> {
        return this.http.get<CrmContactRefund[]>(this.APIUrl + '/ac01appvlist');
    }

    // Get All Status List
    getAC02AllList(): Observable<CrmContactRefund[]> {
        return this.http.get<CrmContactRefund[]>(this.APIUrl + '/ac02alllist');
    }

    // Get All Status List after AC02
    getAC03AllList(): Observable<CrmContactRefund[]> {
        return this.http.get<CrmContactRefund[]>(this.APIUrl + '/ac02appvlist');
    }

    // PUT
    updateAC02Status(data): Observable<CrmContactRefund> {
        return this.http.put<CrmContactRefund>(this.APIUrl + '/ac02approved/' + data.hyrf_id, JSON.stringify(data), this.httpOptions).pipe(
            retry(1),
            catchError(this.errorHandl)
        );
    }

    updateAC02Reject(data): Observable<CrmContactRefund> {
        return this.http.put<CrmContactRefund>(this.APIUrl + '/ac02reject/' + data.hyrf_id, JSON.stringify(data), this.httpOptions).pipe(
            retry(1),
            catchError(this.errorHandl)
        );
    }

    // PUT
    updateRefund(data): Observable<CrmContactRefund> {
        return this.http.put<CrmContactRefund>(this.APIUrl + '/refund/' + data.hyrf_id, JSON.stringify(data), this.httpOptions).pipe(
            retry(1),
            catchError(this.errorHandl)
        );
    }

    // Check Role
    checkRoleTF01(_username: string): Observable<string> {
        return this.http.get<string>(this.APIUrl + '/checkroletf01/' + _username);
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
