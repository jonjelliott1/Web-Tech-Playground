var faker = require("faker");


var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

var randomProductName = faker.commerce.productName();
var randomProductPrice = faker.commerce.price();
console.log(randomProductName + " - $" + randomProductPrice );


console.log("======================")
console.log("==Welcome to my Shop==")
console.log("======================")

for(var i = 0; i < 10; i++){
    console.log(faker.commerce.productName() + " - $" + faker.commerce.price() );
}