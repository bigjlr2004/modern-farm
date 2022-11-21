//define a variable whose value is an empty array that will store the plants that growing in the field
const plantStore = [];

//define and export a function named addPlant 
//this function accepts a seedObject and adds the seed to the plantStore array.
export const addPlant = (seed) => {
    plantStore.push(seed);
    return plantStore;
}

//define and export a function named usePlants that returns a copy of the plantStore array
export const usePlants = () => {
    //return a copy of the plantStore Array 
return plantStore.map( x => x);
};

