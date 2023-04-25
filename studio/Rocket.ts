import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
        let sum: number = 0;
        
        for (let i = 0; i < items.length; i++) {
            sum += items[i].massKg
        }

        return sum 
    }

    currentMassKg(): number {
        let total: number = this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);

        return total;
    }
}
