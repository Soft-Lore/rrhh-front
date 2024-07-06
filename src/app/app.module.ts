import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordFieldComponent } from './componets/password-field/password-field.component';
import { TextFieldComponent } from './componets/text-field/text-field.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordFieldComponent,
    TextFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
