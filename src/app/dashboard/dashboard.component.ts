import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	public staticAlertClosed = true;

  	constructor(
		private router: Router
	) { }

	ngOnInit() {
		this.router.navigate(['/billboard', 'dashboard', 'assets']);
	}

	public goToPage(pageName: string) {
		if(pageName == "assets") {
			this.router.navigate(['/billboard', 'dashboard', 'assets']);
		} else {
			this.staticAlertClosed = false;
			setTimeout(() => {
				this.staticAlertClosed = true;
			}, 3000);
		}
	}
}
