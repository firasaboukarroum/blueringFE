import { Component, OnInit, Input } from '@angular/core';
import { Header } from '../header';
import {TablaData} from '../tabla-data';
import { Facility } from '../facility';
import { FacilityServiceService } from '../facility-service.service';


@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrls: ['./portfolio-table.component.css']
})
export class PortfolioTableComponent implements OnInit {
  facilities: Facility[] = [];
  @Input() tableHeader: Header[] = [];
  @Input() tableHeaderSecurity: Header[] = [];
  @Input() tData: TablaData[] = [];
  @Input() clr: string = 'red';
  actualLimit = 0;
  authorizedBalance = 0;

  constructor(private facilityService: FacilityServiceService) { }

  ngOnInit(): void {

     this.facilityService.getFacilities().subscribe((data: Facility[]) => {
     this.facilities = data;
});
    this.sum();

  }

   sum(){
    this.actualLimit=0;
    this.facilities.map(row=>{
      this.actualLimit=this.actualLimit+row.actualLimit;
    }
    );
    console.log(this.facilities);
    return this.actualLimit;
  }
  zeroFunction(){
    return 0;
  }
}
