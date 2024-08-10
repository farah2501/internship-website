import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrl: './newform.component.css'
})
export class NewformComponent implements OnInit {
  title = 'Employee Details'; 
  newUserDetails: any[] = [];
  employeeId!: any;
  data!: any;
  formSubmitted: boolean = false;

  verification = [
    {verify: true, value: ' Verified '},
    {verify: false, value: ' Not Verified '}
  ];

  userObj: any = {
    fullname: '',
    firstname: '',
    lastname: '',
    age: '',
    phoneNum: '',
    job: '',
    company: '',
  };

  constructor(
    private modalService: NgbModal,
    private router: Router, 
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    let localData = localStorage.getItem('newUserDetails');
    if(localData != null){
      this.newUserDetails = JSON.parse(localData);
    }


    this.route.queryParams.subscribe(params => {
      // Extract the parameters and assign them to component variables
      this.employeeId = params['id'];
    });

    this.getData();
  }
  
  getData(){
    this.http.get<any>(`https://retoolapi.dev/JMojai/data/${this.employeeId}`).subscribe((result) => {
      this.data = result;
      // console.log(this.data);
    });
  }

  navigateToNewList(content: any) {
    this.formSubmitted = true;
    this.newUserDetails.push(this.userObj);
    localStorage.setItem('userDetails', JSON.stringify(this.newUserDetails));
    this.userObj = {
      fullname: '',
      firstname: '',
      lastname: '',
      age: '',
      phoneNum: '',
      job: '',
      company: '',
    };
    this.modalService.open(content, { centered: true });
    this.router.navigate(['/newlist'], {queryParams : { id: this.employeeId }});
  }  
}
