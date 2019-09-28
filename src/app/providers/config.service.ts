import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  loader: any;

  constructor(public loadingController: LoadingController, public toastController: ToastController) { }

  async showLoader(message?: string) {
    // Can't have more than one loader
    if (this.loader) return;
    // For more than one you have to add:
    // id: loadingId
    this.loader = await this.loadingController.create({
      message: message ? message : 'Cargando...',
    });
    return await this.loader.present();
  }

  dismissLoader() {
    // For remove specific loader
    // this.loadingController.dismiss(null, null, loadingId);
    if (this.loader) {
      this.loadingController.dismiss();
      this.loader = null;
    }
  }

  async showToast(text, color?) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000,
      position: 'bottom',
      color: color,
      closeButtonText: 'Cerrar'
    });
    toast.present();
  }

}
