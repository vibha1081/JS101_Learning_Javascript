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
  let x=checkPrime(13)
  console.log(x)