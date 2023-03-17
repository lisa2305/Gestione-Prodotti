import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProdottiComponent } from './prodotti/home-prodotti.component';
import { ConvertToSpacePipe } from './condivisa/convert-to-space.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ProdottiComponent, ConvertToSpacePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
