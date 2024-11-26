import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/modules/shared/interfaces/IProduct';
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
  protected products!: IProduct[];


    constructor(private readonly _authSrv: AuthService,
      private readonly _firestoreSrv: FirestoreService,
      private readonly _loadingSrv: LoadingService,
      private readonly _toastSrv: ToastService,
      
    ) { }

    ngOnInit() {
      this.loadProducts();
    }

    public async loadProducts() {
      try {
        const userId = await this._authSrv.getAuthUserId();
        this._firestoreSrv.getCollectionDocuments<IProduct>('products').subscribe(
          (products) => { 
            this.products = products;
          },
          (error) => {
            console.error('Error loading products:', error);
          }
        );
      } catch (error) {
        console.error('error to load', error);
      }
    }

  }
