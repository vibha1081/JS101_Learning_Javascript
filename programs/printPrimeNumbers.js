function checkPrime(num){
    let isPrime=true;
    for(let i=2;i<num;i++){
      if(num%i==0) {
       isPrime=false;
       break;
      }
    }
    return isPrime;
  }
  function printPrime(num){
    for(let j=2;j<=num;j++){
      if(checkPrime(j)===true){
        console.log(j)
      }
    }
  }
  
  printPrime(42);