import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthenticationService } from '../shared';
import { first } from 'rxjs/operators';
import { MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loading = false;
    returnUrl: string;
    username: string;
    password: string;
    error: string;

    constructor(
        public router: Router,
        private route: ActivatedRoute,
        private service: AuthenticationService,
        private snackBar: MatSnackBar
    ) {}


    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    onLoggedin() {
        // console.log('kai');
        // localStorage.setItem('isLoggedin', 'true');
        // $('.loader').show();

        // console.log(this.username);
        // console.log(this.password);

        this.loading = true;
        this.service
            .login(this.username, this.password)
            .pipe(first())
            .subscribe(
                data => {
                    localStorage.setItem('isLoggedin', 'true');
                    this.router.navigate(['/dashboard']);
                },
                error => {
                    // console.log(this.loading);
                    this.loading = false;
                    // this.error = 'Error: Could not log in-Unauthorized!! ';
                    this.snackBar.open('Error: Could not log in-Unauthorized!! ' + error['message'], '', {
                        duration: 5000
                    });
                }
            );
    }
}
