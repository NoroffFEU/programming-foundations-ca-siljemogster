import { features } from "./features.js";
import { km } from "./function.js";


const camperVan = {
    id: 18779,
    make: "volkswagen",
    model: "caravelle t3",
    year: "1986", 
    firstName: "alfred",
    color: "blue", 
    isOld: true,
    numberOfWheels: 4
    
    
};

console.log(camperVan.id)
console.log(camperVan.make)
console.log(camperVan.model)
console.log(camperVan.year)
console.log(camperVan.firstName)
console.log(camperVan.color)
console.log(camperVan.isOld)
console.log(camperVan.numberOfWheels)


const age = 2023 - 1986; 
console.log(age); 


if (age >= 30) {
    console.log("it is a vintage car"); 
}

else {
    console.log("it is not a vinatage car");
};




















/*var button = document.querySelector(".button"); 

console.dir(button);

button.onclick = function () {
    console.log("Here is all Features");

}; 

*/











/*var features = [
    {
        name: "High-top roof",
        usage: "More space, able to stand tall"
    },
    {
        name: "Foldable bed",
        usage: "For sleeping",
    },
    {
        name: "Heater",
        usage: "To get warm",
    },
    {
        name: "Fridge",
        usage: "To keep the food cold and lasting",
    },


];  


 console.log(features);


var featureContainer = document.querySelector(".features"); 


for (var i = 0; i < features.lenght; i++) {

    var item = features [i];
    console.log(item.name); 
    console.log(item.usage);

    featuresContainer.innerHTML = featuesContainer.innerHTML + "<h2" + item.name + "</h2>" + item.usage; 

}

*/