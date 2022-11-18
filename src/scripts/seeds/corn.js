/* create seed modules in the seed directory
    each module define ad export a function that
    will return an object with three properties
    i.  type ii. height iii. output
    corn module will return an array with two identical objects.
    I am grateful for this opportunity.
*/

// define and export the corn function
export const createCorn =() => {
    //create a corn array wth two identical corn objects stored inside.
    
    const cornArray = [
        { type: "Corn",
        height: 180,
        output: 6
        },
        { type: "Corn",
        height: 180,
        output: 6
    }
    ]
    //return cornArray to the vairable that invoked the function
    return cornArray;
};