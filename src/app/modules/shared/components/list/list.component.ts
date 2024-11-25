import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  IProduct } from '../../interfaces/IProduct';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() products!: IProduct[];
  @Input() label!: string;
  @Input() isClickable: boolean = false;
  @Output() itemClick = new EventEmitter<IProduct>();

  protected onItemClick(product: IProduct) {
    if (this.isClickable) {
      this.itemClick.emit(product);
    }
  }
  
}
