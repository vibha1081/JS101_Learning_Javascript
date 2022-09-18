function add(num1, num2){
    return num1 + num2;
  }
  
  function addNumbers(num1, num2, num3) {
    let sum = add(num1, num2);
    let finalSum = add(sum, num3);
    return finalSum;
  }
  
  console.log(addNumbers(5, 10, 50))