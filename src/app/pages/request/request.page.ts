import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { IProduct } from 'src/app/modules/shared/interfaces/IProduct';
import { AuthService } from 'src/app/modules/shared/services/auth/auth.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore/firestore.service';
import { LoadingService } from 'src/app/modules/shared/services/loading/loading.service';
import { ToastService } from 'src/app/modules/shared/services/toast/toast.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
  public userName!: FormControl;
  public area!: FormControl;
  public duration!: FormControl;
  public status!: FormControl;
  public requestForm!: FormGroup;
  public product!: IProduct;

  constructor(private readonly _firestoreSrv: FirestoreService, 
    private readonly _toastSrv: ToastService, 
    private readonly _loadingSrv: LoadingService, 
    private readonly _authSrv: AuthService,
  ) { }

  ngOnInit() {
    this.initForm();

    this.product = history.state.product;

    if(!this.product) {
      console.error('product not found')
    }
    
  }

  public async submit() {
    if (this.requestForm.valid) {
      if (!this.product) {
        console.error("Product is not defined");
        return;
      }
  
      try {
        await this._loadingSrv.showLoading();
  
        const requestData = {
          ...this.requestForm.value,
          productId: this.product.id,
          productName: this.product.name,
          requestDate: new Date(),
        };
  
        await this._firestoreSrv.save('requests', requestData);
        console.log("Solicitud guardada exitosamente");
      } catch (error) {
        console.error("Error al guardar solicitud:", error);
      } finally {
        this._loadingSrv.hideLoading();  
      }
    }
  }
  
  private initForm() {
    this.userName = new FormControl('', [Validators.required]);
    this.area = new FormControl('', [Validators.required]);
    this.duration = new FormControl('', [Validators.required]);
    this.status = new FormControl('pendiente')

    this.requestForm = new FormGroup({
     userName: this.userName,
     area: this.area,
     duration: this.duration,
     status: this.status,
    });
  }
}
