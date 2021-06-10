import { Component, OnInit, Input } from '@angular/core';
import { Header } from '../header';
import { Facility } from '../facility';
import { FacilityServiceService } from '../facility-service.service';
import {TotalData} from "../total-data";



@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrls: ['./portfolio-table.component.css']
})
export class PortfolioTableComponent implements OnInit {
  facilities: Facility[] = [];
  @Input() tableHeader: Header[] = [];
  @Input() tableData: Facility[]=[];
  @Input() tableHeaderSecurity: Header[] = [];
  @Input() totalHeader: Header[]=[];
  @Input() totalData:TotalData[]=[];
  total = 0;
  authorizedBalance = 0;

  constructor() { }

  ngOnInit(): void {



  }


  zeroFunction(){
    return 0;
  }
  trySum(type: string, forCol: string){
    this.total=0;
    if(forCol=='authorizedBalance') {
      this.tableData.map(row => {
          if (row.facilityType == type) {
            this.total = this.total + row.authorizedAmount;
          }
        if(type=='total'){
          this.total=this.total+row.authorizedAmount;
        }
        }
      );
    }
    if(forCol=='actualLimit') {
      this.tableData.map(row => {
          if (row.facilityType == type) {
            this.total = this.total + row.actualLimit;
          }
        if(type=='total'){
          this.total=this.total+row.actualLimit;
        }
        }
      );
    }
    if(forCol=='requestedAmount') {
      this.tableData.map(row => {
          if (row.facilityType == type) {
            this.total = this.total + row.requestedAmount;
          }
        if(type=='total'){
          this.total=this.total+row.requestedAmount;
        }
        }
      );
    }



    return this.total ;
  }
}
