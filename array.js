// array
const  myArr = [0,1,2,3,4,5];
const  mysir =["P Das" ," Joty", "akhilesh"];
const myarr2 =  new Array(1,2,3,4,5);
// console.log(myArr[2]);
//    // some method of the array
//    myArr.push(6);
//    console.log(myArr);
//    myArr.pop();
//    myArr.pop();
//    console.log(myArr);
//    //myArr.unshift(9) // add the elemnt in the first index
//    myArr.shift(); // delete the first elemnt
//    console.log(myArr);

//    // you can check tour no is present or not
//     console.log(myArr.includes(7));  // it will show boolean true or false

//     const newArr = myArr.join();
//     console.log(myArr);
//     console.log(typeof newArr);



       // +++++  SLice   ans Splice 
//   console.log("A",myArr);
//   const mynum1 = myArr.slice(1,3);
//   console.log(mynum1);
//   console.log("B",myArr);
//   const mynum2 = myArr.splice(1,3);
//   console.log(mynum2);
  



//    const marval = ["saktiman" , " iron", "spiderman","thor"];
//    const bts = ["ram","shyam","sita","geeta"];
  
  
// //    marval.push(bts);
// //    console.log(marval);  // yaha to vo dyamic array ba n chuka hai 
// //    console.log(marval[3][1]); // yaha per vo 3rd kaa 1 index wala 
// //    console.log(marval[4][1]); // yaha per vo yah per jo bts hai vo pura ek index hai uska 1 index wala
  

//  const allhera =marval.concat(bts);
// //console.log(allhera);

   
// const all_hero = [...marval,  ...bts]
// console.log(all_hero);


console.log(Array.isArray("siddhu")); // HERE  i am asking the array
console.log(Array.from("siddhu")); // we are changing to array  kais sae value pass ker sakete ho
console.log(Array.from({ name :"siddhu"}));  // it will show the  empty array he is just asking fro m ke kisko banana hai key yaa value ko
  // we are canging to the value in array
 let score1 = 100;
 let score2 = 400;
 let score3 = 300;
console.log(Array.of(score1,score3,score2));



   
   