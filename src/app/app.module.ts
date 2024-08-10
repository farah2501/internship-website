import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OnlyAlphabetsDirective } from './shared/only-alphabet.directive';
import { OnlyNumbersDirective } from './shared/only-numbers.directive';
import { HttpClientModule } from '@angular/common/http';
import { NewlistComponent } from './newlist/newlist.component';
import { NewformComponent } from './newform/newform.component';
import { NgArrayPipesModule } from 'ngx-pipes';
import { SearchfilterPipe } from './searchfilter.pipe';


@NgModule({
  imports: [
    FormsModule,  
    BrowserModule, 
    NgbModule, 
    AppRoutingModule, 
    HttpClientModule, 
    NgArrayPipesModule],
  declarations: [
    AppComponent, 
    LoginComponent, 
    DashboardComponent, 
    FormComponent, 
    ListComponent, 
    NavbarComponent,
    OnlyAlphabetsDirective,
    OnlyNumbersDirective, 
    NewlistComponent,
    NewformComponent,
    SearchfilterPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
