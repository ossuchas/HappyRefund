import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, Subject, BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../models';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CrmcontactrefundService } from 'src/app/shared/services';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public service: CrmcontactrefundService;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    formData: User;

    // Base url
    readonly APIUrl = environment.apiUrl;

    // Http Headers
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    helloWorld() {
        console.log('Hello World Authen.');
    }

    // POST
    login(_username: string, _password: string) {
        return this.http.post<User>(this.APIUrl + '/login', { username: _username, password: _password }, this.httpOptions).pipe(
            map(user => {
                this.http.get<string>(this.APIUrl + '/checkroleauth/' + user.employeeID).subscribe (data => {
                // this.http.get<string>(this.APIUrl + '/checkroletf01/' + 'AP000782').subscribe (data => {
                    // user.roletf01 = data['message'];
                    user.roletf01 = data['menurefundtf1'];
                    user.roletf02 = data['menurefundtf2'];
                    user.roleac01 = data['menurefundac01'];
                    user.roleac02 = data['menurefundac02'];
                    user.roleac03 = data['menurefundac03'];

                    localStorage.setItem('roletf01', data['menurefundtf1']);
                    localStorage.setItem('roletf02', data['menurefundtf2']);
                    localStorage.setItem('roleac01', data['menurefundac01']);
                    localStorage.setItem('roleac02', data['menurefundac02']);
                    localStorage.setItem('roleac03', data['menurefundac03']);
                });
                // console.log(user.roletf01);
                localStorage.setItem('currentUser', JSON.stringify(user));
                console.log(user);
                this.currentUserSubject.next(user);
                return user;
            })
        );
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isLoggedin');
        localStorage.removeItem('roletf01');
        localStorage.removeItem('roletf02');
        localStorage.removeItem('roleac01');
        localStorage.removeItem('roleac02');
        localStorage.removeItem('roleac03');
        this.currentUserSubject.next(null);
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
}
