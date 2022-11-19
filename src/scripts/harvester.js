// create and export a funciton named harvestPlants
// harvestPlants accepts the plants Array as input 
//harvestPlants returns an array of seed objects from the tractor module

// the harvestPlants adds a a corresponding seed object for the output proerty on the seed object.
let harvestedPlants = [];
export const harvestPlants = (plants) => {
    // iterate through the array of plants
 for(const item of plants){
    // for each item check to see of the item property is equal to corn
    if(item.type === "Corn"){
            //if the ite is equal to corn add 1/2 of the corn objects to the array of harvested plants
        for (let i = 0; i < (item.output/2); i++)
            harvestedPlants.push(item);
            
    } else  {
            //if the item is not equal to corn add the number of objects equal to the output property of the
            // item
       for(let j =0; j < item.output; j++)
        harvestedPlants.push(item);
    }
    }
    return harvestedPlants;
}

 

