import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgGridModule } from 'ag-grid-angular';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetCreateComponent } from './asset-create/asset-create.component';
import { NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AssetListComponent,
    AssetCreateComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAlertModule,
    AgGridModule.withComponents([])     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
