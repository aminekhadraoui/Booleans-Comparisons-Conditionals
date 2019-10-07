
function oldEnoughToDrive (age){
  if (age>=16){
  return true;
  }
  return false;
}
oldEnoughToDrive (16);

function compare (l1,l2){
if (l1.length===l2.length){
  return true;
}
return false;
}
compare("med amine miral eddine ","dhia");

function password(pass){
  if(pass.length>=6){
    return true;
}return false;
}
password("orororo");


function verify (name,age){
  if (age<21){
    return false;
  }
  return true;
}
verify("med eaze",22);

function max(a,b){
  if(a>b){
    return a;
  }
  return b;
}
max(14,15);

function min(a,b){
  if(a<b){
    return a;
  }
  return b;
}
max(14,15);

function max_min(a,b){
  if(a>b){
    return a+" is greater than :"+b;
  }

return b+" is greater than :"+a; 
}
 max_min(14,13);

function even(a){
  if (a % 2 === 0 ) {
    return true;  
  }
return false ;
} 

function odd(a){
  if (a % 2 === 0 ) {
    return false;  
  }
return true ;
}  
function positive(a){
  if (a > 0 ) {
    return true;  
  }
return false  ;
} 
function positive(a){
  if (a < 0 ) {
    return true;  
  }
return false  ;
} 
function randInt (a){
  return Math.floor((Math.floor(a))*(Math.random()));
}
randInt (5)

function guessMyNumber(a){
  if ( a === Math.floor((Math.floor(a))*(Math.random())) ){
    return 'You guessed my number!' ;
  }return 'Nope! That wasn t it!'
}
 guessMyNumber(2);
 function rental (name,age,day){
  if(age<21 && age >= 18 && (day === 'monday' || day==='Tuesday')){
    return true;
  }
  if (age<21 && name==='joe'){
    return false;
  }
  return true;
}
function score (grade){
if (grade >=98 && grade <=100){
return 'A+' ;
}
if (grade >=90 && grade <=98){
return 'A-' ;
}
if(grade >=88 && grade <90){
  return 'B+';
}
if(grade >=80 && grade <88){
  return 'B-';
}

if(grade >=78 && grade <80){
  return 'c++';
}
if(grade >=70 && grade <78){
  return 'c-';
}

if(grade >=68 && grade <70){
  return 'd+';
}
if(grade >=60 && grade <68){
  return 'd-';
}

if(grade <60){
  return 'f';
}
if(grade>100 || grade<0 ){
  return 'INVALID SCORE';
}
}
function toDo (temp,weather){
  if (weather === "snow" && temp < 0){
    return 'The weather is ideal for: '+'sking';
  }
  else if (weather === "windy" && temp > 20){
    return 'The weather is ideal for: '+'football';
  }
  if (weather === "sunny" && temp > 30){
    return 'The weather is ideal for: '+'Picnic'
  }
}
function guessMyNumber(a){
  if (a>5){
    return"youre guess is out of bound";
  }else if ( a === Math.floor((Math.floor(a))*(Math.random())) ){
    return 'You guessed my number!' ;
  }return 'Nope! That wasn t it!'
}

guessMyNumber(6);

function orsh (a,b){
  return !(!a && !b);
}
andsh(false,false);

function orsh (a,b){
  return !(!a && !b);
} 
orsh(true,false);


function letterGrade(letter,grade){
if(grade%10 >=0 && grade%10 <=2){
  return letter+"-";
}
if(grade%10 >=3 && grade%10 <=6){
  return letter;
}
if(grade%10 >=7 && grade%10 <=9){
  return letter+"+";
}


}
letterGrade("b",88);