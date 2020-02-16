import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetCreateComponent } from './asset-create/asset-create.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [{
	path: 'billboard',
	component: HomeComponent,
	children: [{
		path: 'login',
		component: LoginComponent
	},{
		path: 'dashboard',
		component: DashboardComponent,
		children: [{
			path: 'assets',
			component: AssetListComponent
		},{
			path: 'assets/newAsset',
			component: AssetCreateComponent
		}]
	}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
