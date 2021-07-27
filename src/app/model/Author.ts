import { Address } from "./Address";

export class Author {
    id: number;
    name: string;
    lastName: string;
    address: Address | null

    constructor(){
        this.id = 0;
        this.name = '',
        this.lastName = '',
        this.address = new Address();
    }
}