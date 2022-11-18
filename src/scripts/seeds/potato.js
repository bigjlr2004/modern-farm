/* create seed modules in the seed directory
    each module define and export a function that
    will return an object with three properties
    i.  type ii. height iii. output
    corn module will return an array with two identical objects.
    I am grateful for this opportunity to create the potatoObject.
*/

// define and export a function named createPotato that will return a potatoObject with three properties
export const createPotato = () => {
    // create a potatoObject to be returned to the variable that invoked the createPotato function
    const potatoObject = {
        //assign the potatoObject the type, height, and ouput properties
        type: "Potato",
        height: 32,
        output: 2
    };
    //return the potatoObject object to the variable that invoked the createPotato function
    return potatoObject;
};