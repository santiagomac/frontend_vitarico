import { Component, OnInit } from '@angular/core';
import { Customer } from '../../interfaces/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss'],
})
export class ListClientComponent implements OnInit {
  displayedColumns = ['name', 'lastname', 'email', 'document', 'actions'];
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  private getCustomers() {
    this.customerService.getCustomers().subscribe((data) => {
      this.customers = data;
    });

    console.log(this.customers);
  }

  deleteCustomer(id: number){
    this.customerService.deleteCustomer(id).subscribe(data => {
      this.getCustomers()
    })
  }
}
