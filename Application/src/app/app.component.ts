import { Component } from '@angular/core';
import {Header} from './header';
import {TotalData} from "./total-data";
import {FacilityServiceService} from "./facility-service.service";
import {Facility} from "./facility";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  facilities: Facility[] = [];
  constructor(private facilityService: FacilityServiceService) { }

  ngOnInit(): void {

    this.facilityService.getFacilities().subscribe((data: Facility[]) => {
      this.facilities = data;
    });


  }
  title = 'blueringTask';
  tableHeader: Header [] = [
  {prop:'facilityDescription',size:25, title:'FACILITY',type:'text',border:1,color:'#FFFFFF',borderType:'none',hasTotal:false},
  {prop:'iconMoreButtons',size:5, title:'',type:'iconMenu',border:5,color:'#f5f5ff',borderType:'solid',hasTotal:false},
  {prop:'actualLimit',size:10, title:'ACTUAL LIMIT',type:'text',border:1,color:'#F5F5F5',borderType:'solid',hasTotal:true},
  {prop:'authorizedBalance',size:15, title:'AUTHORIZED AMOUNT',type:'text',border:5,color:'#f5f5ff',borderType:'solid',hasTotal:true},
  {prop:'requestedAmount',size:15, title:'REQUESTED AMOUNT',type:'text',border:1,color:'#f5f5ff',borderType:'solid',hasTotal:true},
  {prop:'change',size:10, title:'CHANGE',type:'text',border:1,color:'#f5f5ff',borderType:'solid',hasTotal:false},
  {prop:'status',size:7, title:'STATUS',type:'text',border:0,color:'white',borderType:'none',hasTotal:false},
  {prop:'attachIcon',size:6, title:'',type:'iconAttach',border:0,color:'white',borderType:'none',hasTotal:false},
  {prop:'ellipsisIcon',size:6, title:'',type:'icon',border:0,color:'#f5f5ff',borderType:'none',hasTotal:false}];


  tableHeaderSecurity: Header [] = [
    {prop:'securityDescription',size:25, title:'SECURITY',type:'text',border:1,color:'#FFFFFF',borderType:'none',hasTotal:false},
    {prop:'iconMoreButtons',size:5, title:'',type:'iconMenu',border:5,color:'#f5f5ff',borderType:'solid',hasTotal:false},
    {prop:'currentAmount',size:12, title:'CURRENT AMOUNT',type:'text',border:0,color:'#FFFFFF',borderType:'none',hasTotal:false},
    {prop:'currentSecurityValue',size:15, title:'CURRENT SECURITY VALUE',type:'text',border:5,color:'#f5f5ff',borderType:'solid',hasTotal:false},
    {prop:'proposedAmount',size:12, title:'REQUESTED AMOUNT',type:'text',border:0,color:'#FFFFFF',borderType:'solid',hasTotal:false},
    {prop:'proposedSecurityValue',size:17, title:'PROPOSED SECURITY VALUE',type:'text',border:0,color:'#FFFFFF',borderType:'none',hasTotal:false},
    {prop:'attachIcon',size:6, title:'',type:'text',border:0,color:'white',borderType:'none',hasTotal:false},
    {prop:'ellipsisIcon',size:6, title:'',type:'icon',border:0,color:'#f5f5ff',borderType:'none',hasTotal:false}];

   totalHeader: Header [] = [{prop:'totalDescription',size:30, title:'totalDescription',type:'text',border:5,color:'#f5f5ff',borderType:'solid',hasTotal:false},
    {prop:'actualLimit',size:10, title:'totalActualLimit',type:'text',border:1,color:'#f5f5ff',borderType:'solid',hasTotal:true},
    {prop:'authorizedBalance',size:15, title:'totalAuthorizedBalance',type:'text',border:5,color:'#f5f5ff',borderType:'solid',hasTotal:true},
    {prop:'requestedAmount',size:15, title:'totalRequestedAmount',type:'text',border:1,color:'#f5f5ff',borderType:'solid',hasTotal:true},
     {prop:'none',size:30, title:'none',type:'text',border:1,color:'#f5f5ff',borderType:'solid',hasTotal:false}

   ]
  totalData: TotalData [] =[{description:'TOTAL DIRECT', actualLimit:0,authorizedBalance:0,requestedAmount:0, rowType:'direct'},
    {description:'TOTAL INDIRECT', actualLimit:0,authorizedBalance:0,requestedAmount:0, rowType:'inDirect'},
    {description:'TOTAL PSE', actualLimit:0,authorizedBalance:0,requestedAmount:0, rowType:'PSE'},
    {description:'TOTAL', actualLimit:0,authorizedBalance:0,requestedAmount:0, rowType:'total'},
    {description:'DEDUCTIBLE 100% CASH COLLATERAL', actualLimit:0,authorizedBalance:0,requestedAmount:0, rowType:''},
    {description:'NET EXPOSED DEDUCTIBLE 100% CASH CO.', actualLimit:0,authorizedBalance:0,requestedAmount:0, rowType:''}]
}

