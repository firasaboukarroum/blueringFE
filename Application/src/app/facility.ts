import { Security } from './security';

export class Facility {
	id! : number;
	description! : string;
	subDescription! : string;
	actualLimit! : number;
	authorizedAmount! : number;
	requestedAmount! : number;
	facilityChange! : number; 
	economicSector! : string;
	interestType! : string;
	spreadOrRate! : number;
	reviewDate! : Date;
	interestRate! : number;
	interestPeriod! : string;
	intervalPeriod! : number;
	penaltyRate! : string; 
	CHDBCommissionPerMill! : number;
	sourceOfRepayment! : string;
	useOfFunds! : string;
	repaymentTerms! : string;
	totalNumberOfPayments! : number;
	startingDate! : Date;
	internalType! : string;
	country! : string;
	securities: Security[]=[];
}
