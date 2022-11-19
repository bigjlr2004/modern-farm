//define a string to hold the html string
let htmlString = "";
//define and export a catalog function in your catalog module
export const catalog = (plants) => {
    for(const plant of plants){
        htmlString += `<section class="plant">${plant.type}</section>`
    }
    return htmlString;
}

//the function should accept the harvest array as input

//the catlaog should iterate through the array of food objects.

//for each food object add an html representation to an html string to be placed into the main section in 
//the html document.