import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirestoreService } from '../firestore/firestore.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly _angularFire: AngularFireAuth, private readonly _firestoreSrv: FirestoreService) {}

  public async register(email: string, password: string) {
    const res = await this._angularFire.createUserWithEmailAndPassword(email, password);
    const user = res.user;

    if(user) {
      await this._firestoreSrv.save('users', {
        email: user.email,
        role: 'user',
      }, user.uid);
    }
    return res;
  }

  public async signInWithEmailAndPassword(email: string, password: string) {
    return await this._angularFire.signInWithEmailAndPassword(email, password);
  }

  public async singOut() {
    await this._angularFire.signOut();
  }

  public async isAuth() {
    const user = await this._angularFire.currentUser;
    return !!user;
  }

  public async getAuthUserId() {
    const user = await this._angularFire.currentUser;
    return user?.uid;
  }
}
