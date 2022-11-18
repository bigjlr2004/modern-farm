/* create seed modules in the seed directory
    each module define and export a function that
    will return an object with three properties
    i.  type ii. height iii. output
    corn module will return an array with two identical objects.
    I am grateful for this opportunity.
*/

// define and export a function named createSoybean that will return a soybeanObject with three properties
export const createSoybean = () => {
    // create a soybeanObject to be returned to the variable that invoked the createSoybean function
    const soybeanObject = {
        type: "Soybean",
        height: 20,
        output: 4
    };
    return soybeanObject;
};