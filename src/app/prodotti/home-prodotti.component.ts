import { Component } from '@angular/core';
import { IProdotto } from '../lista-prodotti';
import { ProdottiService } from './prodotti.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti-html.component.html',
  styleUrls: ['./prodotti.component.css'],
})
export class ProdottiComponent {
  prod: IProdotto[] = [];
  imm: boolean = false;
  private _listFilter: string = '';
  prodottiFiltrati: IProdotto[] = [];
  fromStelle: string = '';

  constructor(private prodottiservizio: ProdottiService) {}

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
   // this.listFilter = '';
    this.prod = this.prodottiservizio.getProdotti();
    this.prodottiFiltrati = this.prod;
  }

  mostraImmagine() {
    this.imm = !this.imm;
    if (this.imm) {
      document.getElementById('b').innerHTML = 'Nacondi immagini';
    } else {
      document.getElementById('b').innerHTML = 'Mostra immagini';
    }
  }

  onStelleClick(valore: string): void {
    this.fromStelle = valore;
  }
}
