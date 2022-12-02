"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };
    Rocket.prototype.canAdd = function (item) {
        return (this.currentMassKg() + item.massKg <= this.totalCapacityKg);
        // if(this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
        //     return true;
        // } else {
        //     return false;
        // }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
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
