import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(
    private snackBar: MatSnackBar) {
  }

  handleError(error: any): void {
    let message = '';
    if (error && error.error && error.error.message) {
      message = error.error.message;
    } else if (error && error.message) {
      message = error.message;
    } else {
      message = JSON.stringify(error);
    }
    this.showMessage(message);
  }

  showMessage(message: string) {
    this.snackBar.open(
      message,
      undefined,
      { duration: 5000 });
  }
}
