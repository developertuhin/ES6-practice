const ages = [12,13,14,15];
const ages2 = [21,23,24,25,22];
const ages3 = [44,45,42,66,54,52];
const allAges = ages.concat(ages2).concat(5).concat(ages3);// Old concate process
// console.log(allAges);
const allAges2 = [ages,ages2,ages3];// not standard because value are showing like array.
// console.log(allAges2);

const allAges3 = [...ages,...ages2,...ages3]; // Standard way. here ... do all value go out from array.
console.log(allAges3);

// Find Max value 
const business = 540;
const minister =1200;
const sochib = 450;
// const maximum = Math.max(business,minister,sochib); // using variable only
const takaPoisha = [540,1200,450];
const maximum = Math.max(...takaPoisha); // find max value from array using three dots(...)
console.log("Maximum value is : "+maximum);