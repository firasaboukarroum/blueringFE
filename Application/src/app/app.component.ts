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
  {prop:'facilityDescription',size:25, title:'FACILITY',type:'text',border:1,color:'#FFFFFF',borderType:'none'},
  {prop:'iconMoreButtons',size:5, title:'',type:'iconMenu',border:5,color:'#f5f5ff',borderType:'solid'},
  {prop:'actualLimit',size:10, title:'ACTUAL LIMIT',type:'text',border:1,color:'#F5F5F5',borderType:'solid'},
  {prop:'authorizedBalance',size:15, title:'AUTHORIZED AMOUNT',type:'text',border:5,color:'#f5f5ff',borderType:'solid'},
  {prop:'requestedAmount',size:15, title:'REQUESTED AMOUNT',type:'text',border:1,color:'#f5f5ff',borderType:'solid'},
  {prop:'change',size:10, title:'CHANGE',type:'text',border:1,color:'#f5f5ff',borderType:'solid'},
  {prop:'status',size:7, title:'STATUS',type:'text',border:0,color:'white',borderType:'none'},
  {prop:'attachIcon',size:6, title:'',type:'iconAttach',border:0,color:'white',borderType:'none'},
  {prop:'ellipsisIcon',size:6, title:'',type:'icon',border:0,color:'#f5f5ff',borderType:'none'}];


  tableHeaderSecurity: Header [] = [
    {prop:'securityDescription',size:25, title:'SECURITY',type:'text',border:1,color:'#FFFFFF',borderType:'none'},
    {prop:'iconMoreButtons',size:5, title:'',type:'iconMenu',border:5,color:'#f5f5ff',borderType:'solid'},
    {prop:'currentAmount',size:12, title:'CURRENT AMOUNT',type:'text',border:0,color:'#FFFFFF',borderType:'none'},
    {prop:'currentSecurityValue',size:15, title:'CURRENT SECURITY VALUE',type:'text',border:5,color:'#f5f5ff',borderType:'solid'},
    {prop:'proposedAmount',size:12, title:'REQUESTED AMOUNT',type:'text',border:0,color:'#FFFFFF',borderType:'solid'},
    {prop:'proposedSecurityValue',size:17, title:'PROPOSED SECURITY VALUE',type:'text',border:0,color:'#FFFFFF',borderType:'none'},
    {prop:'attachIcon',size:6, title:'',type:'text',border:0,color:'white',borderType:'none'},
    {prop:'ellipsisIcon',size:6, title:'',type:'icon',border:0,color:'#f5f5ff',borderType:'none'}];
}

