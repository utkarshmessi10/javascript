//                                               Date and Time

//dates
let mydates = new Date(); // 2025-06-10T08:20:23.783Z
console.log(mydates.toString()); // Tue Jun 10 2025 13:50:56 GMT+0530 (India Standard Time)
console.log(mydates.toISOString()); //2025-06-10T08:23:14.767Z
console.log(mydates.toJSON()); // 2025-06-10T08:23:14.767Z
console.log(mydates.toLocaleString()); //10/6/2025, 1:53:14 pm
console.log(mydates.toLocaleDateString()); // 10/6/2025
console.log(mydates.toLocaleTimeString()); // 1:53:14 pm

console.log(typeof mydates); //its an object

// if we wanna declare any specific date

let mycreateDate = new Date(2025,0,9); // in javascript month start from 0    => Thu Jan 09 2025
console.log(mycreateDate.toDateString());
let mycreation = new Date(2025,0,9,5,5); // 9/1/2025, 5:05:00 am
console.log(mycreation.toLocaleString());

//but when we write in format of dd-mm-yyyy then month will start from 1
let mynewcreation = new Date("2025-10-09");
console.log(mynewcreation.toLocaleString());

// now lets focus on timestamp

let timestamp = Date.now(); // it will give exact todays date in milliseconds
console.log(timestamp);
console.log(mynewcreation.getTime());
console.log(Math.floor(Date.now()/1000)); // if we want in seconds

let newdate= new Date();
console.log(newdate);
console.log(newdate.getMonth());// start from 0 , so it is june meaning 0(jan),1(feb),2(march),3(april),4(may),5(june)
console.log(newdate.getDate());
console.log(newdate.getTime());
console.log(newdate.getHours());
console.log(newdate.getFullYear());

//most used method

console.log(newdate.toLocaleString('default',{
    weekday:"long",
}))