//const obj = {
   // user: prompt()
   // age: prompt()
//}
//console.log(obj);
//let user = 'ivan'
//const obj = {
  //  user: 'ivan',
   // age: 25
//}
//obj.height = 180
//console.log(obj.age, obj.user);
const products = [
    {
        id: 1,
        type: 'sport',
        title: "Велосипед",
        price: 45000,
        discount: 35
    },
    {
        id: 2,
        type: 'sport',
        title: "Лыжи",
        price: 25000,
        discount: 15
    },
    {
        id: 3,
        type: 'sport',
        title: "Ролики",
        price: 17000,
        discount: 10
    },
    {
        id: 4,
        type: 'product',
        title: "Масло",
        price: 1500,
        discount: 50
    },
    {
        id: 5,
        type: 'product',
        title: "Coffe",
        price: 3500,
        discount: 40
    },
    {
        id: 6,
        type: 'product',
        title: "cola",
        price: 2000,
        discount: 30
    },
];
//вывести название товара и его цену
//for (let i = 0; i < products.length; i++) {
  //  console.log(`товар: ${products[i].title}; цена: ${products[i].price}`);
//}
//вывести название товаров, которые дороже 15000
//for (let i = 0; i < products.length; i++) {
 //   if(products[i].price > 15000) {
 //   console.log(products[i].title);
 //   }
//}
//вывести только спортивные товары
//for (let i = 0; i < products.length; i++) {
 //  if(products[i].type === 'sport') {
  //  console.log(products[i].title);
 //  }
//}
// вывести сумму цен всех товаров
//let sum = 0
//for (let i = 0; i < products.length; i++) {
 //  sum += products[i].price
//}
//console.log(sum);
//вывести сумму спортивных товаров
//let sum = 0
//for (let i = 0; i < products.length; i++) {
 //  if(products[i].type === 'sport') 
 //   sum += products[i].price
//}
//console.log(sum);
// вывести цены товаров со скидкой
//for (let i = 0; i < products.length; i++) {
 //   let newPrice = products[i].price - (products[i].discount / 100 * products[i].price)
 //   console.log(newPrice);
//}
//for (let i = 0; i < products.length; i++) {
 //   let {price, discount} = products[i]
  //  let newPrice =price - (discount / 100 * price)
  //  console.log(newPrice);
//}
//let arr = [1, true, 'fdf']
//console.log(arr[0]);
//let a = arr[0]
//let b = arr[1]
//let c = arr[2]
//деструктуризация массива
//let [a,b,c] = arr
//console.log(c, b, a);
//let obj = {
 //   userName: 'ivan',
 //   age: 23,
 //   gender: 'm'
//}
//console.log(uaerName);
//let username = obj.userName
//let age = obj.age
//let gender = obj.gender
//let{userName, age, gender} = obj
//console.log(userName, age, gender);
//let newArr = []
//for (let i = 0; i < products.length; i++) {
 //   if (products[i].price < 15000) {
//newArr.push(products[i].title)
//}
//}
//console.log(newArr);
//let newArr = []
//for (let i = 0; i < products.length; i++) {
 //   let {price, title} = products[i]
 //   if (price < 15000) {
//newArr.push(title)
//}
//}
//console.log(newArr);
//FUNCTION
//alert- название
//function sayHi() {
   // console.log('hi');
   // console.log(prompt() * prompt());
  // console.log(prompt() ** 5); 
//}
//  sayHi()
//  sayHi()
//  sayHi()
  //Объявить функцию, которая считывает значение через prompt и выводит “ДА” если число четное и “НЕТ” в ином случае.
//function evenOrOdd() {
  //  if (prompt() % 2 === 0) {
   //     console.log('Da');
  //  } else {
  //      console.log('Net');
  //  }
//}
//evenOrOdd()
//function func(a) {
 //   console.log(a ** 3);
//}
//func(23)
//func(prompt())
function func(a, b) {
    console.log(a ** b);
}
//func(23, 2)
//func (prompt(), prompt())
console.log(typeof func);
