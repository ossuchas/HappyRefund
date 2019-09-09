import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { CrmContactRefundAppv4View } from '../models';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VwCrmRefundAppv4Service {

    constructor(private http: HttpClient) {}
    formData: CrmContactRefundAppv4View;

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
    getApp4List(): Observable<CrmContactRefundAppv4View[]> {
        return this.http.get<CrmContactRefundAppv4View[]>(this.APIUrl + '/appv4list');
    }

    listen(): Observable<any> {
        return this._listeners.asObservable();
    }
    filter(filterBy: string) {
        this._listeners.next(filterBy);
    }

}
