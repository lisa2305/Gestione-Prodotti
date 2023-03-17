import { Component } from '@angular/core';
import { IProdotto } from '../lista-prodotti';
import { PRODOTTO } from './lista-prodotti.component';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti-html.component.html',
  styleUrls: ['./prodotti.component.css'],
})
export class ProdottiComponent {
  prod = PRODOTTO;
  imm: boolean = false;
  private _listFilter: string = '';
  prodottiFiltrati: IProdotto[] = [];

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.prodottiFiltrati = this.datiFiltrati(value);
  }

  datiFiltrati(filtratoper: string): IProdotto[] {
    filtratoper = filtratoper.toLocaleLowerCase();
    return this.prod.filter((p: IProdotto) =>
      p.productName.toLocaleLowerCase().includes(filtratoper)
    );
  }

  ngOnInit() {
    console.log('lista creata');
    this.listFilter = '';
  }

  mostraImmagine() {
    this.imm = !this.imm;
    if (this.imm) {
      document.getElementById('b').innerHTML = 'Nacondi immagini';
    } else {
      document.getElementById('b').innerHTML = 'Mostra immagini';
    }
  }
}
