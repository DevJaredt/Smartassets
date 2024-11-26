import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/modules/shared/interfaces/IProduct';
import { FirestoreService } from 'src/app/modules/shared/services/firestore/firestore.service';

@Component({
  selector: 'app-let-items',
  templateUrl: './let-items.page.html',
  styleUrls: ['./let-items.page.scss'],
})
export class LetItemsPage implements OnInit {
  public letItems!: IProduct[]; 

  constructor(private readonly _firestoreSrv: FirestoreService) { }

  ngOnInit() {
    this.getLetItems();
  }

  getLetItems(){
    const path = 'products'

    this._firestoreSrv.getCollectionDocuments<IProduct>(path).subscribe({
      next: (res: IProduct[]) => {
        this.letItems = res.filter(product => product.state === 'prestado')
      }
    });
  }

}
