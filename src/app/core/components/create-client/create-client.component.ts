import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerToSave } from '../../interfaces/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  customerForm = this.fb.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    document: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  public saveCustomer(){
    const customerToSave: CustomerToSave = {
      name: this.customerForm.get("name")?.value,
      lastname: this.customerForm.get("lastname")?.value,
      email: this.customerForm.get("email")?.value,
      document: this.customerForm.get("document")?.value,
    }

    console.log(customerToSave)
    this.customerService.saveCustomer(customerToSave).subscribe(data => {
      this.router.navigate(['/client'])
    }, err => {
      console.log("Ha ocurrido un error en el guardado!")
    });
  }

}
