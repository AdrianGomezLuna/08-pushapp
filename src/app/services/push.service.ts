import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';


@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(private oneSignal: OneSignal) { }

  configuracionInicial() {
    this.oneSignal.startInit('093f0449-d95a-4688-9dbb-e5789efb5d69', '981047451701');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
    // do something when notification is received
      console.log('Notificacion recibido', noti);

    });

    this.oneSignal.handleNotificationOpened().subscribe((noti ) => {
      // do something when a notification is opened
      console.log('Notificacion abierta', noti);

    });

    this.oneSignal.endInit();
  }
}
