import { Component, OnInit, Input } from '@angular/core';
import { Header } from '../header';
import {TablaData} from '../tabla-data';

@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrls: ['./portfolio-table.component.css']
})
export class PortfolioTableComponent implements OnInit {
 
  @Input() tableHeader: Header[] = [];
  @Input() tData: TablaData[] = [];
  actualLimit = 0;
  authorizedBalance = 0;
  
  constructor() { }

  ngOnInit(): void {
    this.sum();
    
  }

   sum(){
    this.actualLimit=0;
    this.tData.map(row=>{
      this.actualLimit=this.actualLimit+row.actualLimit;
    }
    );
    console.log("hello"); 
    return this.actualLimit;
  }
  zeroFunction(){
    return 0;
  }
}
