import { Component } from '@angular/core';
import * as QRCode from 'qrcode';


@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.component.html',
  styleUrls: ['./qr-generator.component.css']
})
export class QrGeneratorComponent {
 qrText: string = '';
  qrCode: string = '';

  generateQR() {
    // Utiliza la función toDataURL de la librería QRCode para generar el código QR
    QRCode.toDataURL(this.qrText)
      .then(url => this.qrCode = url)
      .catch(error => {
        console.error('Error generating QR code:', error);
        this.qrCode = '';
      });
  }
}
