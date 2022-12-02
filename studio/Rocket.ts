import { Payload } from "./Payload";
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';


export class Rocket{
    name: string;
    totalCapacityKg: number;
    cargoItems: any[];
    astronauts: any[];
    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }

    sumMass(items: Payload[]): number{
        let sum: number = 0;

        for (let i = 0; i < items.length; i++){
            sum += items[i].massKg;
        }

        return sum;
    }

    currentMassKg(): number{
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd(item: Payload): boolean{
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
    }

    addCargo(cargo: Cargo): boolean{
        
        if (this.canAdd(cargo) === true){
           this.cargoItems.push(cargo);
           return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut) === true){
            this.cargoItems.push(astronaut);
            return true;
         } else {
             return false;
         }
    }
}

// let testRocket: Rocket = new Rocket("test", 12345)

// let astronauts: Astronaut[] = [
//     new Astronaut(75, 'Mae'),
//     new Astronaut(81, 'Sally'),
//     new Astronaut(99, 'Charles')
//  ];

//  let cargo: Cargo[] = [
//     new Cargo(3107.39, "Satellite"),
//     new Cargo(1000.39, "Space Probe"),
//     new Cargo(753, "Water"),
//     new Cargo(541, "Food"),
//     new Cargo(2107.39, "Tesla Roadster"),
//  ];

//  console.log(testRocket.sumMass(astronauts))
//  console.log(testRocket.sumMass(cargo))
//  console.log(testRocket.sumMass(astronauts) + testRocket.sumMass(cargo))

      