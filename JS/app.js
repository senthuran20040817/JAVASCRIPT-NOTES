let x = 10;
let y = 5;
let z = "5";

//----------------  Arithmetocal Operators (+ , - , * , /)  ----------------
console.log(x+y); //prints 15
console.log(x-y); //prints 5
console.log(x*y); //prints 50
console.log(x/y); //prints 2
console.log(x+z); //prints 105


//----------------  Comparison Operators (> , < , ===)  ----------------
console.log(x>y);   //prints true
console.log(x<y);   //prints false
console.log(x>=y);  //prints true
console.log(x<=y);  //prints false
console.log(x==y);  //prints false (checks only integer values)
console.log(y==z); //prints true (doesn't care about datatypes)
console.log(x===y); //prints false (content should same) 
console.log(y===z); //prints false (datatypes should also same)
//"==" is less powerful but "===" is more powerful.
//"==" only checks the content. doesn't care avout datatypes. but "===" checkes the datatype and content. both should equal. 


//----------------  Logical Operators(&& , || , !)  ----------------
if(x>7 && y<7){
    console.log("AND condition only works if the both conditions are true.");
}

if(x>7 || y>7){
    console.log("OR condition only works if minimum one condition is true.");
}

if(!(x<7)){
    console.log("NOT condition only works if a condition's vice-versa is true.");
}
