import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { CrmContactRefund } from '../models';
import { environment } from 'src/environments/environment';
import { analyzeAndValidateNgModules } from '@angular/compiler';

export interface HeaderResponse {
    pageCount?: number;
    totalCount?: number;
    [key: string]: any;
}

export interface HttpClientRequestOptions {
    body?: any;
    headers?: HttpHeaders;
    observe?: 'body' | 'response';
    params?: {
        [param: string]: string;
    };
    reportProgress?: boolean;
    responseType?: 'text';
    withCredentials?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class CrmcontactrefundService {
    constructor(private http: HttpClient) { }

    formData: CrmContactRefund;

    // Base url
    readonly APIUrl = environment.apiUrl;
    readonly APILineUrl = environment.apilineurl;

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

    // PUT AC03 Update Status
    // Modified by Suchat S. 2019-10-12 for update reason reject and change due refund date
    updateAC03Status(data): Observable<CrmContactRefund> {
        return this.http.put<CrmContactRefund>(this.APIUrl + '/ac03approved/' + data.hyrf_id, JSON.stringify(data), this.httpOptions).pipe(
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

    // Send to Line Notify API
    // POST
    send2lineapi(_line_token: string, _line_owner: string, _send_msg: string) {
        return this.http
            .post<any>(
                this.APILineUrl + '/aplineregister',
                { line_token: _line_token, line_owner: _line_owner, send_msg: _send_msg },
                this.httpOptions
            )
            .pipe(
                map(data => {
                    console.log(data);
                })
            );
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



    exportMemoReturnCustomerNonSignUrl(input?: any, codeStr?: string, options?: HttpClientRequestOptions, token?: string): Observable<any> {

        console.log('token', token);
        options = {} as HttpClientRequestOptions;
        options.headers = options.headers || new HttpHeaders();
        options.headers = options.headers.set('Authorization', 'Bearer ' + token);
        return this.http.request('post', `https://sale-api-crmrevo.apthai.com/api/RefundMemo/` + codeStr + `/GetExportMemoReturnCustomerNonSignUrl`, options);
    }

    exportMemoReturnCustomerSignUrl(input?: any, codeStr?: string, options?: HttpClientRequestOptions, token?: string): Observable<any> {

        console.log('token', token);
        options = {} as HttpClientRequestOptions;
        options.headers = options.headers || new HttpHeaders();
        options.headers = options.headers.set('Authorization', 'Bearer ' + token);
        return this.http.request('post', `https://sale-api-crmrevo.apthai.com/api/RefundMemo/` + codeStr + `/GetExportMemoReturnCustomerSignUrl`, options);
        // return this.http.request('post', `http://crmrevo-sale-api-crmrevo-dev.devops-app.apthai.com/api/RefundMemo/` + codeStr + `/GetExportMemoReturnCustomerSignUrl`, options);
    }
    openWindowWithPost(url, data) {
        return new Promise<any>(resolve => {
            setTimeout(() => {
                const form = document.createElement('form');
                form.target = '_blank';
                form.method = 'POST';
                form.action = url;
                form.style.display = 'none';

                for (const key in data) {
                    const input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = key;
                    input.value = data[key];
                    form.appendChild(input);
                }

                document.body.appendChild(form);
                form.submit();
                document.body.removeChild(form);

                resolve(true);
            }, 2000);
        });
    }

    getToken(): Observable<any> {
        const username = localStorage.getItem('user');
        const password = localStorage.getItem('password');
        const optionsloging = {} as HttpClientRequestOptions;
        optionsloging.body = {
            grant_type: 'password',
            username: username,
            password: password,
            refresh_token: 'string'
        };

        return this.http.request('post', 'https://identity-api-crmrevo.apthai.com/api/Token/Login', optionsloging);
        // return this.http.request('post', 'http://crmrevo-identity-api-crmrevo-dev.devops-app.apthai.com/api/Token/Login', optionsloging);
    }
}
