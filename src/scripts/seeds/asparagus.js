// create a module that stores a function that creates a new asaragus seed object when the function is invoked

//define and export a createAsparagus function that will create an asparagusObject

export const createAsparagus = () => {
    //create asparagusObject
    const asparagusObject = {
        type: "Asparagus",
        height: 24,
        output: 4
    };
    //return asparagus Object to the variable that invoked the function
    return asparagusObject;
}