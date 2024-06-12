import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string=''; //Importa el nombre de la variable el holder y Holder no son igual

  @Output()
  public onValue = new EventEmitter<string>();

  imprimirValue( value:string):void{
    this.onValue.emit(value);
  }

}
