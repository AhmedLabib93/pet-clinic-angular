import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { Owner } from "../owners/owner";
import { PetType } from "../pettypes/pet-type";
import { Visit } from "../visits/visit";

export class Pet {
    id:number;
    name:string;
    birthDate:string;
    owner : Owner;
    type: PetType;
    visits: Visit[];
}
