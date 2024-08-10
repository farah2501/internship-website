import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data!: any[];

  listStudents: any[] = [
    { Name: 'Farah', Status:'Approved', Age: '23', PhoneNumber:'0123456783', Email:'farah@gmail.com', ICNumber: '1234560197890', Address:'23, Jalan Cempaka', Postcode: '43120', City: 'Nilai', State: 'Negeri Sembilan',  Company:'Edaran IT' },
    { Name: 'Syaza', Status:'Pending', Age: '22', PhoneNumber:'0123456782', Email:'syaza@gmail.com', ICNumber: '2334560197890', Address:'31, Jalan Cempaka', Postcode: '43120', City: 'Nilai', State: 'Negeri Sembilan', Company:'Edaran IT' },
    { Name: 'Irdina', Status:'Approved', Age: '20', PhoneNumber:'0123456798', Email:'irdina@gmail.com', ICNumber: '4234560197890', Address:'2, Jalan Cempaka',  Postcode: '43120', City: 'Nilai', State: 'Negeri Sembilan', Company:'Edaran IT' }
  ];

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  addNewStudent(studentId: any): void {
    this.router.navigate(['/form'], {queryParams : { id: studentId }});
  }

  getData(){
    this.http.get<any>('https://retoolapi.dev/AwVA3o/data').subscribe((result) => {
      this.data = result;
      console.log(this.data);
    });
  }
}
