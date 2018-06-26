import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NewsletterService } from './newsletter.service';
import { PushNotificationsService } from './push-notifications.service';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    
  ],
  providers: [NewsletterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
