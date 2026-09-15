//----------------  IF / ELSE / ELSE IF  ----------------
let units = 110;
let bill;

if(units<=10){
    bill = units*10;
}else if(units<=100){
    bill = 50*10 + (units-50)*15;
}else{
    bill = 50*10 + 50*15 + (units-100)*20;
}
console.log(bill);