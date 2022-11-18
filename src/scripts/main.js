console.log("Welcome to the main module");

//import a function named createPlan from the module plan.js
import { createPlan } from "./plan.js";
//import a function named createCorn from the corn module.js 
import { createCorn } from "./seeds/corn.js";
//import a function named createSoybean from the soybean module.
import { createSoybean} from "./seeds/soybean.js";
//import a function named createWheat from the wheat module.
import {createWheat} from "./seeds/wheat.js";
//import the createSunflower function from the sunflower module
import {createSunflower} from "./seeds/sunflower.js";
//import the createPotato function from the potato module 
import {createPotato} from "./seeds/potato.js";
//import the createAsparagus function from the asparagus module
import {createAsparagus} from "./seeds/asparagus.js";
//import usePlants and addPlant from the field module
import {usePlants, addPlant} from "./field.js";
//import plantSeeds function from the tractor module
import {plantSeeds} from "./tractor.js";


//invoke the function createPlan and store it in an object called yearlyPlan
let newYearlyPlan = createPlan();
console.log(newYearlyPlan);
//invoke the function createCorn and store an array of objects in the variable cornSeed
const cornSeed = createCorn();
console.log(cornSeed);
//invoke the function createSoybean and store the object in the variable soybeanSeed
const soybeanSeed = createSoybean();
console.log(soybeanSeed);
//invoke the function createWheat and store the object it returns in the variable wheatSeed
const wheatSeed = createWheat();
//console.log the wheatSeed object's output property that is an integer 
//that was created from the createWheat function
console.log(`Wheat object: ${wheatSeed.output}`);
//console log the wheatSeed obect type property
console.log(`Wheat object: ${wheatSeed.type}`);
const sunflowerSeed = createSunflower()

const potatoSeed = createPotato();

const asaparagusSeed = createAsparagus();

const test = plantSeeds(newYearlyPlan);
console.log(test);
const testseeds = usePlants();
console.log(testseeds); 


// const first = usePlants()
// console.log(first)



