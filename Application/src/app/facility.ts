import { Security } from './security';
import { Status } from './status';
import {MoreButton} from "./more-button";

export class Facility {
	id! : number;
	description! : string;
	subDescription! : string;
	actualLimit! : number;
	authorizedAmount! : number;
	requestedAmount! : number;
	securities: Security[]=[];
	status!: Status;
	facilityType!: string;
  moreButtons: MoreButton[]=[];
}
