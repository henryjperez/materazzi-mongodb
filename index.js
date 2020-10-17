const axios = require("axios");
const a = {
    a: "perro",
    b: "bb",
    c: "cc",
};

if (axios) {
    console.log("it worked!!!");
} else {
    console.log("it failed!!");    
}

module.exports = a;
