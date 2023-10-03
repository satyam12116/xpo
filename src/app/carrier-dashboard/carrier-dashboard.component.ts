import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrier-dashboard',
  templateUrl: './carrier-dashboard.component.html',
  styleUrls: ['./carrier-dashboard.component.scss']
})
export class CarrierDashboardComponent implements OnInit {
  startDate!: Date;
  endDate!: Date;
  tableData = [
    {id: 1, createdDate: "2023-12-12", pickupDate: "2023-12-15", origin: "Nagpur", destination: "Bangalore", equipmentType: "Electronics", price: 500, status: "New Order"},
    {id: 2, createdDate: "2023-12-13", pickupDate: "2023-12-16", origin: "Mumbai", destination: "Chennai", equipmentType: "Furniture", price: 700, status: "In Progress"},
    {id: 3, createdDate: "2023-12-14", pickupDate: "2023-12-17", origin: "Delhi", destination: "Hyderabad", equipmentType: "Appliances", price: 600, status: "Delivered"},
    {id: 4, createdDate: "2023-12-15", pickupDate: "2023-12-18", origin: "Kolkata", destination: "Pune", equipmentType: "Clothing", price: 450, status: "New Order"},
    {id: 5, createdDate: "2023-12-16", pickupDate: "2023-12-19", origin: "Chandigarh", destination: "Jaipur", equipmentType: "Books", price: 300, status: "Cancelled"},
    {id: 6, createdDate: "2023-12-17", pickupDate: "2023-12-20", origin: "Ahmedabad", destination: "Surat", equipmentType: "Automotive", price: 550, status: "In Progress"},
    {id: 7, createdDate: "2023-12-18", pickupDate: "2023-12-21", origin: "Lucknow", destination: "Kanpur", equipmentType: "Toys", price: 400, status: "Delivered"},
    {id: 8, createdDate: "2023-12-19", pickupDate: "2023-12-22", origin: "Bhopal", destination: "Indore", equipmentType: "Sports Equipment", price: 650, status: "New Order"},
    {id: 9, createdDate: "2023-12-20", pickupDate: "2023-12-23", origin: "Coimbatore", destination: "Madurai", equipmentType: "Musical Instruments", price: 800, status: "In Progress"},
    {id: 10, createdDate: "2023-12-21", pickupDate: "2023-12-24", origin: "Vadodara", destination: "Rajkot", equipmentType: "Art", price: 350, status: "Delivered"},
    {id: 11, createdDate: "2023-12-22", pickupDate: "2023-12-25", origin: "Guwahati", destination: "Shillong", equipmentType: "Stationery", price: 250, status: "New Order"},
    {id: 12, createdDate: "2023-12-23", pickupDate: "2023-12-26", origin: "Thiruvananthapuram", destination: "Kochi", equipmentType: "Garden Supplies", price: 700, status: "In Progress"},
  ];
  
  filteredData!: any[];

  filterData() {
    const startTimestamp = new Date(this.startDate).getTime();
    const endTimestamp = new Date(this.endDate).getTime();

    this.filteredData = this.tableData.filter((item) => {
      const createdDateTimestamp = new Date(item.createdDate).getTime();
      const pickupDateTimestamp = new Date(item.pickupDate).getTime();

      return createdDateTimestamp >= startTimestamp && pickupDateTimestamp <= endTimestamp;
    });
  }
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/getOrder').subscribe(data => {
      this.tableData = data;
    })
  }

}
