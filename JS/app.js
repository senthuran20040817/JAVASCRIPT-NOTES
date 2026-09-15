//----------------  IF / ELSE / ELSE IF  ----------------
let marks = 50;

if(marks<=100 && marks>=0){
    if(marks>=75){
        console.log("Grade : A");
    }else if(marks>=65){
        console.log("Grade : B");
    }else if(marks>=50){
        console.log("Grade : C");
    }else if(marks>=35){
        console.log("Grade : S");
    }else{
        console.log("Grade : F");
    }
}else{
    console.log("Invlaid Marks");
}
