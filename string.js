const  name = "siddhu";
const universtiy = " lovely profestional university";
 //  console.log(name + universtiy); this is old version

 
 // now a day
// console.log(`hello my name is ${name} and my university is ${universtiy}`);
// const cname = new  String('Sudhakar');
// console.log(cname[4]);
// console.log(cname.__proto__); // for access aage sab function and method
// console.log(cname.length);
// console.log(cname.toUpperCase());
// console.log(cname.charAt(2));
// console.log(cname.indexOf('k'));

// use all the function like substring , sliec trim (remove white space), replace function .....

// ++++++++++++++++++++++++++++++ DATE +++++++++++++++++++
// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof(myDate));

// let createnewdate = new Date(2026,4,3);
// console.log(createnewdate.toLocaleString());

// aur bhi kai sare hai
//   +++++++++++++++++++++ Time ++++++++++++++++++

// let mytimestam = Date.now();
// console.log(mytimestam);
// console.log(createnewdate.getTime());
// console.log(Math.floor(Date.now()/1000));



let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getMonth()+ 1); 
console.log(newDate.getDay());

newDate .toLocaleString('Default',{
    weekday : "long",
})






