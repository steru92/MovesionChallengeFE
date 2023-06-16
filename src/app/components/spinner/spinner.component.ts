import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  loading: Observable<boolean>;

  constructor(
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.loading = this.spinnerService.loading$;
  }

}
