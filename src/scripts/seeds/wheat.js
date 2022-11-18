/* create seed modules in the seed directory
    each module define and export a function that
    will return an object with three properties
    i.  type ii. height iii. output
    corn module will return an array with two identical objects.
    I am grateful for this opportunity to create a wheat module.
*/

// define and export a function named createWheat that will return a wheatObject with three properties
export const createWheat = () => {
    // create a wheatObject to be returned to the variable that invoked the createWheat function
    const wheatObject = {
        //add three properties to the wheatObject
        type: "Wheat",
        height: 230,
        output: 6
    };
    //return wheatObject to the variable that invoked the createWheat function
    return wheatObject;
};