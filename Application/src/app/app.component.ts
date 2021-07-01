import { Component } from '@angular/core';
import {Header} from './header';
import {TotalData} from "./total-data";
import {FacilityServiceService} from "./facility-service.service";
import {Facility} from "./facility";
import {SecurityService} from "./security.service";
import {Security} from "./security";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  facilities :Facility[] = [];
  securities: Security[]=[];
  constructor(private facilityService: FacilityServiceService, private securityService: SecurityService) { }

  ngOnInit(): void {

    this.facilityService.getFacilities().subscribe((data: Facility[]) => {
      this.facilities = data;
    });

    this.securityService.getSecurities().subscribe((data: Security[]) => {
      this.securities = data;
    });

  }
  title = 'blueringTask';
  tableHeader: Header [] = [
  {prop:'description',size:25, title:'FACILITY',type:'text',border:0,color:'#EDEDED',borderType:'none',hasTotal:false,hasSubDescription:true, linkType:"",linkTitle:''},
  {prop:'iconMoreButtons',size:5, title:'',type:'iconMenu',border:5,color:'#EDEDED',borderType:'solid',hasTotal:false, hasSubDescription:false, linkType:"",linkTitle:''},
  {prop:'actualLimit',size:10, title:'ACTUAL LIMIT',type:'text',border:1,color:'#EDEDED',borderType:'solid',hasTotal:true, hasSubDescription:false, linkType:"",linkTitle:''},
  {prop:'authorizedAmount',size:15, title:'AUTHORIZED AMOUNT',type:'text',border:5,color:'#EDEDED',borderType:'solid',hasTotal:true, hasSubDescription:false, linkType:"",linkTitle:''},
  {prop:'requestedAmount',size:15, title:'REQUESTED AMOUNT',type:'text',border:1,color:'#EDEDED',borderType:'solid',hasTotal:true, hasSubDescription:false, linkType:"",linkTitle:''},
  {prop:'change',size:10, title:'CHANGE',type:'text',border:1,color:'#EDEDED',borderType:'solid',hasTotal:false, hasSubDescription:false, linkType:"",linkTitle:''},
  {prop:'status',size:7, title:'STATUS',type:'text',border:0,color:'white',borderType:'none',hasTotal:false, hasSubDescription:false, linkType:"",linkTitle:''},
  {prop:'attachIcon',size:7, title:'',type:'iconAttach',border:0,color:'white',borderType:'none',hasTotal:false, hasSubDescription:false, linkType:"securities",linkTitle:'LINKED SECURITIES'},
  {prop:'ellipsisIcon',size:6, title:'',type:'icon',border:0,color:'#EDEDED',borderType:'none',hasTotal:false, hasSubDescription:false, linkType:"",linkTitle:''}];


  tableHeaderSecurity: Header [] = [
    {prop:'description',size:25, title:'SECURITY',type:'text',border:1,color:'#EDEDED',borderType:'none',hasTotal:false, hasSubDescription:true, linkType:"",linkTitle:''},
    {prop:'iconMoreButtons',size:5, title:'',type:'iconMenu',border:5,color:'#EDEDED',borderType:'solid',hasTotal:false, hasSubDescription:false, linkType:"",linkTitle:''},
    {prop:'currentAmount',size:12, title:'CURRENT AMOUNT',type:'text',border:0,color:'#EDEDED',borderType:'none',hasTotal:false, hasSubDescription:false, linkType:"",linkTitle:''},
    {prop:'currentSecurityValue',size:15, title:'CURRENT SECURITY VALUE',type:'text',border:5,color:'#EDEDED',borderType:'solid',hasTotal:false, hasSubDescription:false, linkType:"",linkTitle:''},
    {prop:'proposedAmount',size:12, title:'REQUESTED AMOUNT',type:'text',border:0,color:'#FFFFFF',borderType:'solid',hasTotal:false, hasSubDescription:false, linkType:"",linkTitle:''},
    {prop:'proposedSecurityAmount',size:17, title:'PROPOSED SECURITY VALUE',type:'text',border:0,color:'#FFFFFF',borderType:'none',hasTotal:false, hasSubDescription:false, linkType:"",linkTitle:''},
    {prop:'attachIcon',size:6, title:'',type:'text',border:0,color:'white',borderType:'none',hasTotal:false, hasSubDescription:false, linkType:"facilities",linkTitle:'LINKED FACILITIES'},
    {prop:'ellipsisIcon',size:6, title:'',type:'icon',border:0,color:'#EDEDED',borderType:'none',hasTotal:false, hasSubDescription:false, linkType:"",linkTitle:''}];

   totalHeader: Header [] = [{prop:'totalDescription',size:30, title:'totalDescription',type:'text',border:5,color:'#EDEDED',borderType:'solid',hasTotal:false, hasSubDescription:false, linkType:"",linkTitle:''},
    {prop:'actualLimit',size:10, title:'totalActualLimit',type:'text',border:1,color:'#EDEDED',borderType:'solid',hasTotal:true, hasSubDescription:false ,linkType:"",linkTitle:''},
    {prop:'authorizedAmount',size:15, title:'totalAuthorizedBalance',type:'text',border:5,color:'#EDEDED',borderType:'solid',hasTotal:true, hasSubDescription:false,linkType:"",linkTitle:''},
    {prop:'requestedAmount',size:15, title:'totalRequestedAmount',type:'text',border:1,color:'#EDEDED',borderType:'solid',hasTotal:true, hasSubDescription:false, linkType:"",linkTitle:''},
     {prop:'none',size:30, title:'none',type:'text',border:1,color:'#EDEDED',borderType:'solid',hasTotal:false, hasSubDescription:false, linkType:"",linkTitle:''}

   ]
  totalData: TotalData [] =[{description:'TOTAL DIRECT', actualLimit:0,authorizedBalance:0,requestedAmount:0, rowType:'direct'},
    {description:'TOTAL INDIRECT', actualLimit:0,authorizedBalance:0,requestedAmount:0, rowType:'inDirect'},
    {description:'TOTAL PSE', actualLimit:0,authorizedBalance:0,requestedAmount:0, rowType:'PSE'},
    {description:'TOTAL', actualLimit:0,authorizedBalance:0,requestedAmount:0, rowType:'total'},
    {description:'DEDUCTIBLE 100% CASH COLLATERAL', actualLimit:0,authorizedBalance:0,requestedAmount:0, rowType:''},
    {description:'NET EXPOSED DEDUCTIBLE 100% CASH CO.', actualLimit:0,authorizedBalance:0,requestedAmount:0, rowType:''},

  ]
}

