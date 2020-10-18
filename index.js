var fetch=require('node-fetch');
// async function
async function fetchAsync(){
// await response of fetch call 
let response=await fetch("https://pollysnips.s3.amazonaws.com/bostonEmployeeSalaries.json"); 
// only proceed once promise is resolved
let data=await response.json();
// only proceed once second promise is resolved 
return data;
}
// trigger async function
// log response or catch error of fetch promise
function findMaxSalary(data){
// data.data[0] is the entry for the first person in the database. If we look at this array from the data, we see entry 18 (starting from 0) is the salary
let maxSalary =0;
let indexOfMax =0;
let index2 =0;
let maxSbase =0;
let nombre="";
let cargo="";
let unidad="";
let nombre2="";
let cargo2="";
let unidad2="";
for(var i=0; i<data.data.length; i++){
if(Number(data.data[i][18])>maxSalary){
    maxSalary=Number(data.data[i][18]); 
    indexOfMax=i;
    nombre=String(data.data[i][8]);
    cargo=String(data.data[i][9]);
    unidad=String(data.data[i][10]);
}    
if(Number(data.data[i][11])>maxSbase){
    maxSbase=Number(data.data[i][11]); 
    index2=i;
    nombre2=String(data.data[i][8]);
    cargo2=String(data.data[i][9]);
    unidad2=String(data.data[i][10]);
}
}
console.log('Maximum Total Salary Found: US$',maxSalary,'/Reg:',indexOfMax+1,'/',nombre,'/',cargo,'/',unidad); 
console.log('Maximum Base Salary Found: US$',maxSbase,'/Reg:',index2+1,'/',nombre2,'/',cargo2,'/',unidad2); }
fetchAsync()
.then(data=> findMaxSalary(data)) 
.catch(reason=>console.log(reason.message));
