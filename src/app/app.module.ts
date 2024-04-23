import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { MessagesComponent } from './components/shared/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboadComponent } from './components/shared/dashboad/dashboad.component';
import { GlobalErrorHandler } from 'src/common/errors/handler/global-error-handler';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryDataService } from './services/in-memory-data/in-memory-data.service';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { UniqueAlterEgoValidatorDirective } from './shared/alter-ego.directive';
import { IdentityRevealedValidatorDirective } from './shared/identity-revealed.directive';
import { HeroSearchComponent } from './components/shared/hero-search/hero-search.component';
import { provideAuth0 } from '@auth0/auth0-angular';
import { NavVarComponent } from './components/shared/nav-var/nav-var.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    DashboadComponent,
    HeroSearchComponent,
    NavVarComponent,
    ForbiddenValidatorDirective,
    UniqueAlterEgoValidatorDirective,
    IdentityRevealedValidatorDirective,
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    provideAuth0({
      domain: 'xxxxxxxxxxx.us.auth0.com',
      clientId: 'xxxxxxxxxxxxxxxxxxxx',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
})
export class AppModule {}
