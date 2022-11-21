//define a string to hold the html string
let htmlString = "";
//define and export a catalog function in your catalog module
export const catalog = (plants) => {
    //use spread operator to make a copy of the plantsArray
    let foodObjects = [...plants];
    //the catlaog should iterate through the array of food objects.
    for (const plant of foodObjects) {
        //for each food object add an html representation to an html string to be placed into the main section in 
        //the html document.
        htmlString += `<section class="plant">${plant.type}</section>`
    }
    return htmlString;
}





