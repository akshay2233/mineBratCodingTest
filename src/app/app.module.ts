import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CityListComponent } from './city-list/city-list.component';
import { ResultComponent } from './result/result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreService } from './core.service';
import { AuthintercepterService } from './authintercepter.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CityListComponent,
    ResultComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CoreService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthintercepterService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
