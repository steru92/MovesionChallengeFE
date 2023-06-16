import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import AuthResponse from 'src/app/models/authResponse';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username = new FormControl('');
  password = new FormControl('');
  expiration = new FormControl('');

  constructor (
    private loginService: LoginService,
    private spinnerService: SpinnerService,
    private utilitiesService: UtilitiesService,
    private authService: AuthService,
    private router: Router
  ) { }

  login(): void {
    this.spinnerService.show();
    if (this.username.value && this.password.value) {
      const expiration = this.expiration.value ? +this.expiration.value : undefined;
      this.loginService.login(this.username.value, this.password.value, expiration).subscribe({
        next: (response: AuthResponse) => {
          this.authService.storeToken(response.token);
          this.spinnerService.hide();
          this.router.navigate(['home']);
        },
        error: (err: any) => {
          this.spinnerService.hide();
          this.utilitiesService.handleError(err);
        }
      });
    }
  }
}
