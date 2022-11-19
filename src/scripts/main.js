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
import { harvestPlants } from "./harvester.js";
import {catalog} from "./catalog.js";


//invoke the function createPlan and store it in an object called newYearlyPlan
let newYearlyPlan = createPlan();


const test = plantSeeds(newYearlyPlan); 


const testseeds = usePlants();
const harvested = harvestPlants(testseeds);

const parentHTMLElement = document.querySelector(".container")


parentHTMLElement.innerHTML = catalog(harvested)
 





