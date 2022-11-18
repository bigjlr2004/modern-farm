/* create seed modules in the seed directory
    each module define and export a function that
    will return an object with three properties
    i.  type ii. height iii. output
    corn module will return an array with two identical objects.
    I am thankful for the opportuunity to create the sunflower object.
*/

// define and export a function named createSunflower that will return a sunflowerObject with three properties
export const createSunflower = () => {
    // create a sunflowerObject to be returned to the variable that invoked the createSunflower function
    const sunflowerObject = {
        type: "Sunflower",
        height: 380,
        output: 3
    };
    return sunflowerObject;
};