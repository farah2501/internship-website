import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbCalendar, NgbDateStruct, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit{
  title = 'User Details'; 
  States: string[] = [ "Johor", "Kedah", "Kelantan", "Melaka", "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Pulau Pinang", "Sabah", "Sarawak", "Selangor", "Terengganu", "Wilayah Persekutuan"];
  DefaultOption: string = this.States[0];
  userDetails: any[] = [];
  Value = this.States[0];
  selectedLanguages!: string;
  studentId!: any;
  data!: any;
  address2!: string;
  defaultGender!: string;
  startDate!: NgbDateStruct;
  endDate!: NgbDateStruct;
  formSubmitted: boolean = false;
  cCheck : boolean = false;
  javaCheck : boolean = false;
  swiftCheck : boolean = false;

  Languages = [
  { id: 1, name: 'C++', checked: false },
  { id: 2, name: 'Java', checked: false },
  { id: 3, name: 'Swift', checked: false },
  ];
  userObj: any = {
    name: '',
    age: '',
    phoneNum: '',
    email: '',
    icnumber: '',
    address: '',
    postcode: '',
    city: '',
    Value1: '',
    company: ''
  };
  gender = [
    {id: 1, value: ' Male '},
    {id: 2, value: ' Female '}
  ];

  constructor(
    private calendar: NgbCalendar, 
    private router: Router, 
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    let localData = localStorage.getItem('userDetails');
    if(localData != null){
      this.userDetails = JSON.parse(localData);
    }


    this.route.queryParams.subscribe(params => {
      // Extract the parameters and assign them to component variables
      this.studentId = params['id'];
    });

    this.getData();

  }

  getData(){
    this.http.get<any>(`https://retoolapi.dev/AwVA3o/data/${this.studentId}`).subscribe((result) => {
      this.data = result;
      // console.log(this.data);
      // console.log(this.studentId);

      if(result.languages == 1){
        this.cCheck = true;
      }else if(result.languages == 2){
        this.javaCheck = true;
      }else{
        this.swiftCheck = true;
      }
    });
  }

  initializeDates() {
    const today = this.calendar.getToday();
    this.startDate = { year: today.year, month: today.month, day: today.day };
    this.endDate = { year: today.year, month: today.month, day: today.day };
  }

  navigateToList(content: any) {
    this.formSubmitted = true;
    this.userDetails.push(this.userObj);
    localStorage.setItem('userDetails', JSON.stringify(this.userDetails));
    this.userObj = {
      name: '',
      age: '',
      phoneNum: '',
      email: '',
      icnumber: '',
      address: '',
      postcode: '',
      city: '',
      Value1: '',
      company: ''
    };
    this.modalService.open(content, { centered: true });
    this.router.navigate(['/list'], {queryParams : { id: this.studentId }});
  }  

}
