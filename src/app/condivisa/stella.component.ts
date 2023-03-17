import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'stella',
  templateUrl: './stella.component.html',
  styleUrls: ['./stella.component.css'],
})
export class StellaComponent implements OnChanges {
  //rating: number = 4;
  //ci permette di prendere il valore da un componente padre
  @Input() rating: number;
  cropWidth: number;

  ngOnChanges(): void {
    this.cropWidth = this.rating * (75 / 5);
  }
}
