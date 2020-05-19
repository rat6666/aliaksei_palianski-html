import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RisksListComponent } from './shared/layouts/risks-list/risks-list.component';
import { RiskEditComponent } from './shared/layouts/risk-edit/risk-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SiteLayoutComponent,
    MainPageComponent,
    RisksListComponent,
    RiskEditComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
    ScrollPanelModule,
    InputTextModule,
    InputTextareaModule,
    MessagesModule,
    MessageModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
