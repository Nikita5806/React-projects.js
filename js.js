
const funki = ["jiji" , "gygy", "Dmzmzs", "koko"];
const games = ["menubar", "bv" ,"vc" ,"jidb", "vc"];


const funGuji = [...funki,...games]
console.log(funGuji)


const products = [
    { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
    { id: 2, name: "Smartphone", price: 30000, category: "Electronics" },
    { id: 3, name: "Headphones", price: 2000, category: "Accessories" },
    { id: 4, name: "Backpack", price: 1500, category: "Bags" },
    { id: 5, name: "Wrist Watch", price: 5000, category: "Fashion" }
  ];
  
let newme = products.filter(function(products){
    return products.category === "Electronics";
})
  console.log(newme)

const users = [
    { id: 1, name: "Alice", age: 25, email: "alice@example.com", role: "Admin" },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com", role: "User" },
    { id: 3, name: "Charlie", age: 22, email: "charlie@example.com", role: "Moderator" },
    { id: 4, name: "David", age: 28, email: "david@example.com", role: "User" },
    { id: 5, name: "Eve", age: 26, email: "eve@example.com", role: "Admin" }
  ];
  let yu= users.map(function(users){
    return `<div> <h3>${users.name}<h3> <h5> ${users.email}</div>`;
  })  ;

const users = [
    { id: 1, name: "Alice", age: 25, email: "alice@example.com", role: "Admin" },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com", role: "User" },
    { id: 3, name: "Charlie", age: 22, email: "charlie@example.com", role: "Moderator" },
    { id: 4, name: "David", age: 28, email: "david@example.com", role: "User" },
    { id: 5, name: "Eve", age: 26, email: "eve@example.com", role: "Admin" }
  ];
  
let obj = {};
users.forEach (function(users){
    if (obj[users.role]){
        obj[users.role].push(users)
    }
    else{
        obj[users.role] = [];
        obj[users.role].push(users);
    }

})
  console.log(obj);
