const rLine = require('readline-sync');
const fs = require('fs');

let pizzaList = [];
pizzaList= fs.readFileSync('pizzaList.txt', {encoding:'utf8', flag:'r'});

let list = () => {
        console.log("LIST OF PIZZAS : ");
        console.log(pizzaList);
        console.log("\n############\n");    
        home();
    }

 


let add = (pizzaUser) => {
    console.log("Adding the pizza " + pizzaUser + " to the list");
    console.log("\n############\n");
    arrTemp.push(pizzaUser);

    home();
}

let remove = (pizzaUser) => {
    pizzaUser -= 1;
    let pizzaToRemove = arrTemp[pizzaUser] ;
    console.log("Remove the pizza " + pizzaToRemove + " to the list");
    console.log("\n############\n");
    let indexToRemove = arrTemp.indexOf(pizzaUser);
    arrTemp.splice((indexToRemove ), 1);
    fs.writeFileSync('pizzaList.txt',  arrTemp);
   
    home();
}

let exit = () => {
    console.log("Have a great day !");
}

let home = () => {
    arrTemp = [...pizzaList];
console.log("Hello! Welcome to the Pizza Flavors Manager.\n"
+"\nPlease choose your actions: \n"
+"\n1 - List all the pizza flavors\n"
+"2 - Add a new pizza flavor \n"
+ "3 - Remove a pizza flavor \n"
+ "4 - Exit this program\n");

let user = rLine.question("Enter your action's number : ");
console.log("\n############\n");

    switch (user) {
        case "1":   
            list();
            break
        case "2":
            pizzaUser = rLine.question("Which pizza do you want to add ? ");
            add(pizzaUser);
            break;
        case "3":
            pizzaUser = rLine.question("Which number of pizza do you want to remove ?");
            remove(pizzaUser);
            break;
        case "4":
            exit();
            break;
    }
}

home();

fs.readFile('pizzaList.txt', (err) => {
    if (err) throw err;
  });

  fs.writeFile('pizzaList.txt', pizzaList, (err) => { 
      
    if (err) throw err; 
}) 