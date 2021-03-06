import { IConfig, NgxMaskModule } from 'ngx-mask';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,

      useClass: HttpErrorInterceptor,

      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
