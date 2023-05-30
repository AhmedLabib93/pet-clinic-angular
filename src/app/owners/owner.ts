import {Pet} from "../pets/pet";

export class Owner {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    phone: string;
    pets: Pet[];
}
