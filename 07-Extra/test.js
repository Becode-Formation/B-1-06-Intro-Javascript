const fs = require('fs');


let test = ["PIZZA1", "PIZZA2", "PIZZA3"];

fs.writeFile('Output.txt', test, (err) => { 
      
    if (err) throw err; 
}) 
