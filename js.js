
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
