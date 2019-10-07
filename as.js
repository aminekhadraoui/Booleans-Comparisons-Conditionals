
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
}
return false;
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