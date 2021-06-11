import { Component, OnInit, Input } from '@angular/core';
import { Header } from '../header';
import { Facility } from '../facility';
import { FacilityServiceService } from '../facility-service.service';
import {TotalData} from "../total-data";
import {DecimalPipe} from "@angular/common";



@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrls: ['./portfolio-table.component.css']
})
export class PortfolioTableComponent implements OnInit {
  facilities: Facility[] = [];
  @Input() tableHeader: Header[] = [];
  @Input() tableData: any =[];
  @Input() tableHeaderSecurity: Header[] = [];
  @Input() totalHeader: Header[]=[];
  @Input() totalData:TotalData[]=[];
  total = 0;
  totalResult: any;
  authorizedBalance = 0;
  format = '1.2-2';
  constructor(private decimalPipe: DecimalPipe) { }


  ngOnInit(): void {



  }


  zeroFunction(){
    return 0;
  }
  trySum(type: string, forCol: any){
    this.total=0;

      this.tableData.map((row:any)=> {
          if (row['facilityType'] == type) {
            this.total = this.total + row[forCol];
          }
          if(type=='total'){
            this.total=this.total+row[forCol];
        }
        }
      );

    this.totalResult=this.decimalPipe.transform(this.total,this.format);
    return this.totalResult;
  }
}
