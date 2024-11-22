import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAsset } from '../../interfaces/IAssests';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() assets!: IAsset[];
  @Input() label!: string;
  @Input() isClickable: boolean = false;
  @Output() itemClick = new EventEmitter<string>();
  @Output() loanRequest: EventEmitter<IAsset> = new EventEmitter<IAsset>();

  protected onItemClick() {
    if (this.isClickable) {
      this.itemClick.emit(this.label);
    }
  }

  onLoanRequest(asset: IAsset) {
    this.loanRequest.emit(asset);
  }
}
