import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newlist',
  templateUrl: './newlist.component.html',
  styleUrl: './newlist.component.css'
})
export class NewlistComponent implements OnInit{
  data!: any[];
  searchText = "";

  constructor (
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getData();
  }
  addEmployee(employeeId: any): void {
    this.router.navigate(['/newform'], {queryParams : { id: employeeId }});
  }

  getData(){
    this.http.get<any>('https://retoolapi.dev/JMojai/data').subscribe((result) => {
      this.data = result;
      console.log(this.data);
    });
  }

}
