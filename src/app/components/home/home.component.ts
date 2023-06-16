import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import Company from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  companies: Company[];
  editingCompanyId: number | null;

  title: string;

  name = new FormControl('');
  address = new FormControl('');
  phone = new FormControl('');
  revenue = new FormControl('');

  constructor(
    private companyService: CompanyService,
    private utilitiesService: UtilitiesService,
    private spinnerService: SpinnerService
  ) {
    this.title = 'NEW COMPANY';
    this.editingCompanyId = null;
  }

  ngOnInit(): void {
    this.spinnerService.show();
    this.companyService.getAll().subscribe({
      next: (cs: Company[]) => {
        this.companies = cs;
        this.spinnerService.hide();
      },
      error: (err: any) => {
        this.spinnerService.hide();
        this.utilitiesService.handleError(err);
      }
    });
  }

  edit(c: Company): void {
    this.title = c.name;
    this.name.setValue(c.name);
    this.address.setValue(c.address);
    this.phone.setValue(c.phone);
    this.revenue.setValue(c.revenue.toString());
    this.editingCompanyId = c.id;
  }

  delete(c: Company): void {
    this.spinnerService.show();
    this.companyService.delete(c).subscribe({
      next: () => {
        this.ngOnInit();
      },
      error: (err: any) => {
        this.spinnerService.hide();
        this.utilitiesService.handleError(err);
      }
    });
  }

  submit(): void {
    this.spinnerService.show();
    const c = new Company(this.name.value!, this.address.value!, this.phone.value!, +this.revenue.value!)
    if (this.editingCompanyId) {
      c.id = this.editingCompanyId;
      this.companyService.update(c).subscribe({
        next: () => {
          this.ngOnInit();
        },
        error: (err: any) => {
          this.spinnerService.hide();
          this.utilitiesService.handleError(err);
        }
      });
    } else {
      this.companyService.insert(c).subscribe({
        next: () => {
          this.ngOnInit();
        },
        error: (err: any) => {
          this.spinnerService.hide();
          this.utilitiesService.handleError(err);
        }
      });
    }
    this.cancel();
  }

  cancel(): void {
    this.name.setValue('');
    this.address.setValue('');
    this.phone.setValue('');
    this.revenue.setValue('');
    this.title = 'NEW COMPANY';

    this.name.setErrors(null);
    this.address.setErrors(null);
    this.phone.setErrors(null);
    this.revenue.setErrors(null);
    this.editingCompanyId = null;
  }
}
