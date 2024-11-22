import { Component, OnInit } from '@angular/core';
import { IAsset } from 'src/app/modules/shared/interfaces/IAssests';
import { AuthService } from 'src/app/modules/shared/services/auth/auth.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore/firestore.service';
import { LoadingService } from 'src/app/modules/shared/services/loading/loading.service';
import { ToastService } from 'src/app/modules/shared/services/toast/toast.service';

@Component({
  selector: 'app-assests',
  templateUrl: './assests.page.html',
  styleUrls: ['./assests.page.scss'],
})
export class AssestsPage implements OnInit {
protected assets!: IAsset[];

  constructor(private readonly _authSrv: AuthService,
    private readonly _firestoreSrv: FirestoreService,
    private readonly _loadingSrv: LoadingService,
    private readonly _toastSrv: ToastService
  ) { }

  ngOnInit() {
    this.loadProducts();
  }

  protected async loadProducts() {
    try {
      const userId = await this._authSrv.getAuthUserId();
      await this._firestoreSrv.getCollectionDocuments('products').subscribe(
        (products) => {
          this.assets = products.map((product: any) => ({
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            location: product.location,
            contCode: product.contCode,
            state: product.state,
          }))
        }
      )
    } catch (error) {
      console.error('error to load', error)
    }
  }
}
