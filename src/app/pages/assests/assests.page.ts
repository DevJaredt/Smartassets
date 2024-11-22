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

    public async loadProducts() {
      try {
        const userId = await this._authSrv.getAuthUserId();
        this._firestoreSrv.getCollectionDocuments<IAsset>('products').subscribe(
          (products) => { 
            this.assets = products;
          },
          (error) => {
            console.error('Error loading products:', error);
          }
        );
      } catch (error) {
        console.error('error to load', error);
      }
    }

    public async onLoanRequest(asset: IAsset){
      if(!asset.state) {
        try {
          await this._firestoreSrv.updateProductState(asset.id, true);
          this._toastSrv.showToast('Product has been marked as lent out.');
        } catch (error) {
          this._toastSrv.showToast('Failed to update product status.');
        }
      } else {
        this._toastSrv.showToast('Product is already lent out.');
      }
    }
  }
