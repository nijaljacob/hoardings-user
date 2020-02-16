import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	public loginForm :FormGroup;
	public staticAlertClosed = true;

	constructor(
		private router: Router
	) { }

	ngOnInit() {
		this.configureForm();
	}

	private configureForm() {
		this.loginForm = new FormGroup({
			userName: new FormControl({
				value: '',
				disabled: false
			}),
			password: new FormControl({
				value: '',
				disabled: false
			})
		});
	}

	public login() {
		if(this.loginForm.controls.userName.value == "admin"
			&& this.loginForm.controls.password.value == "admin")  {
				this.router.navigate(['/billboard', 'dashboard']);
		} else {
			this.staticAlertClosed = false;
			setTimeout(() => {
				this.staticAlertClosed = true;
			}, 3000);
		}
	}
}
