import { Injectable } from '@angular/core';
import { OneSignal, OSNotification } from '@ionic-native/onesignal/ngx';


@Injectable({
  providedIn: 'root'
})
export class PushService {

  mensajes: any[] = [
    {
      title: 'Titulo de la Push',
      body: 'Este es el body de la Push',
      date: new Date()
    }
  ];

  constructor(private oneSignal: OneSignal) { }

  configuracionInicial() {
    this.oneSignal.startInit('093f0449-d95a-4688-9dbb-e5789efb5d69', '981047451701');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
    // do something when notification is received
      console.log('Notificacion recibido', noti);
      this.notificacionRecibida(noti);
    });

    this.oneSignal.handleNotificationOpened().subscribe((noti ) => {
      // do something when a notification is opened
      console.log('Notificacion abierta', noti);

    });

    this.oneSignal.endInit();
  }

  notificacionRecibida(noti: OSNotification) {

    const payload = noti.payload;
    const existePush = this.mensajes.find( mensaje => mensaje.notificactionID === payload.notificationID);

    if (existePush) {
      return;
    }

    this.mensajes.unshift( payload );
  }


}
