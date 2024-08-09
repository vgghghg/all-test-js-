// You are given an array of objects representing products in a store. Each object has three
// properties: name, category, and price. Write a function called filterAndTransformProducts that
// filters the products by a given category and then returns an array of strings where each string is
// the product's name and price concatenated.


// const products = [
//      { name: "Laptop", category: "Electronics", price: 1000 },
//    { name: "Shirt", category: "Clothing", price: 50 },
//     { name: "Phone", category: "Electronics", price: 500 },
//     { name: "Shoes", category: "Clothing", price: 80 }
//     ];


// function filter(products,category){

// var flt;
// var mp;


// flt=products.filter(prod=>{
//    return( prod.category==category);
// });
// console.log(flt);

// mp=flt.map(str=>{
//    console.log( `${str.name},${str.price}`)

// });




// }

// filter(products,"Electronics");

// ///////////////////////////////////////////////////////////////////////////////
    

// //  You are given an array of objects representing orders in a restaurant. Each object has three
// // properties: orderId, tableNumber, and amount. Write a function called sumByTable that returns
// // an object where each key is a tableNumber and the value is the total amount for that table.


// const orders = [
// 	{ orderId: 1, tableNumber: 2, amount: 30 },
// 	{ orderId: 2, tableNumber: 1, amount: 20 },
// 	{ orderId: 3, tableNumber: 2, amount: 50 },
// 	{ orderId: 4, tableNumber: 3, amount: 40 },
// 	{ orderId: 5, tableNumber: 1, amount: 10 },
// ];
//     function sumByTable(orders) {
//         var ob={};
//         orders.forEach(order => {

//             var tno=order.tableNumber;
//             var amt=order.amount;


//             if(ob[tno]){
//                 ob[tno]=ob[tno] +amt;}

//                 else{
//                     ob[tno]=amt;
//                 }
            
//         });

//         return ob;
//     }
// console.log(sumByTable(orders));

// // You are given an array of objects representing inventory items. Each object has a name,
// // quantity, and price. Write a function called inventoryValue that returns the total value of the
// // inventory, but only includes items where the quantity is greater than zero.


// const inventory = [
// { name: "Laptop", quantity: 5, price: 1000 },
// { name: "Shirt", quantity: 0, price: 50 },
// { name: "Phone", quantity: 10, price: 500 },
// { name: "Shoes", quantity: 3, price: 80 }
// ];


// function new1(inventory){
//     var f=inventory.filter(product=>{
//        return product.quantity>0;

//     });
//     // console.log(f);
//     var totalvalue=0;

//     var e=f.forEach(ele => {

//      totalvalue=totalvalue+(ele.quantity*ele.price);
        
//     });

//     return totalvalue;
    
 




// }

// console.log(new1(inventory));

// // You are given an array of objects representing transactions. Each object has a userId, amount,
// // and date. Write a function called topSpenders that returns an array of userIds sorted by their
// // total transaction amount in descending order. Only include users who have made more than one
// // transaction.
// const transactions = [
// { userId: 1, amount: 50, date: "2023-01-01" },
// { userId: 2, amount: 20, date: "2023-01-02" },
// { userId: 1, amount: 100, date: "2023-01-03" },
// { userId: 3, amount: 150, date: "2023-01-04" },
// { userId: 2, amount: 30, date: "2023-01-05" }
// ];
// function topSpenders(transactions) {
// 	let uid = {};
// 	let realuid = [];
// 	for (let trans of transactions) {
// 		const { userId } = trans;
// 		if (uid[userId]) {
// 			uid[userId]++;
// 		} else {
// 			uid[userId] = 1;
// 		}
// 	}
// 	console.log(uid);
// 	let value = Object.keys(uid);
// 	// console.log(value);
// 	for (let v of value) {
// 		if (uid[v] > 1) realuid.push((v));
// 	}
// 	return realuid;
// 	// Your code here
// }
// console.log(topSpenders(transactions));