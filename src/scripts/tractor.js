//the tractor module creates a funcution plantSeeds. this function recieves the yearly plan as an argument passed to it
//import the createAsparagus function from the asparagus module
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


//create and export a plantSeeds function
export const plantSeeds = (rows) => {
    //use a spread operator to copy the array passed in before iteration
    let arr1 = [...rows];
    //iterate through the first array
    // for(const row of rows) {
        for(const row of arr1) {
        //iterate through second layer of array
        for(const plant of row) {
            //if statement to create the seed matching the row location
            if (plant === "Asparagus") {
               const seed = createAsparagus();
               //add seed to array of plants
              const seeded =  addPlant(seed);
            } else if (plant === "Potato") {
                const seed = createPotato();
                //add seed to array of plants
               const seeded = addPlant(seed);
            } else if (plant === "Wheat") {
                const seed = createWheat();
                //add seed to array of plants
               const seeded = addPlant(seed);        
        }else if (plant === "Sunflower") {
            const seed = createSunflower();
            //add seed to array of plants
           const seeded = addPlant(seed);
        } else if (plant === "Soybean") {
            const seed = createSoybean();
            //add seed to array of plants
           const seeded = addPlant(seed);  
    }
    else if (plant === "Corn") {
            // invoke the createCorn function and return back an array of two cornObjects
            const seed = createCorn();
            //iterate through the array of cornObjects
            for(const item of seed){
            //add seed to array of plants for each iteration
        
       const seeded = addPlant(item);
            } 
    }
}
}
}