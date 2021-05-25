import { Component } from '@angular/core';
import {Header} from './header';
import {TablaData} from './tabla-data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blueringTask';
  tableHeader: Header [] = [
  {prop:'facilities',size:200, title:'FACILITY',type:'text',border:2,borderType:'solid'},
  {prop:'icon1',size:30, title:'',type:'iconMenu',border:0,borderType:''},
  {prop:'actualLimit',size:30, title:'ACTUAL LIMIT',type:'text',border:1,borderType:'solid'},
  {prop:'authorizedBalance',size:100, title:'AUTHORIZED AMOUNT',type:'text',border:1,borderType:'solid'},
  {prop:'requestedAmount',size:100, title:'REQUESTED AMOUNT',type:'text',border:2,borderType:'solid'},
  {prop:'change',size:50, title:'CHANGE',type:'text',border:1,borderType:'solid'},
  {prop:'status',size:50, title:'STATUS',type:'text',border:0,borderType:''},
  {prop:'attachIcon',size:30, title:'',type:'iconAttach',border:0,borderType:''},
  {prop:'threePoints',size:30, title:'',type:'icon',border:0,borderType:''}];
  tableData: TablaData []=[
  {dataText:'Medium & Long Term Loan',subData: 'USD-10.5% Interest',icon1Data: ['text1','text2'],actualLimit:200000.00,authorizedBalance:34934,requestedAmount:200000,change:0,
  status:'DRAFT',button2Data:['data1','data2'],button3Data:['change','cancel']},{dataText:'Medium & Long Term Loan',subData: 'USD-10.5% Interest',icon1Data: ['text3','text4'],actualLimit:34400.43,authorizedBalance:4000,requestedAmount:0,change:-344000.43,
  status:'ACTIVE',button2Data:['data3','data4'],button3Data:['change','cancel']},{dataText:'Credit Card Request',subData: 'USD-10.5% Interest',icon1Data: ['text5','text6'],actualLimit:0,authorizedBalance:0,requestedAmount:40000.00,change:0,
  status:'ACTIVE',button2Data:['data5','data6'],button3Data:['change','cancel']}

  ];
}

  