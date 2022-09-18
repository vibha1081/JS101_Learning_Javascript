function getDifference(num1, num2) {
    return num1 - num2;
   }
   
   function getAbsValue(num) {
    if(num < 0){
      num = num * (-1)
    }
     
    return num;
   }
   
   function getAbsoluteDifference(num1, num2) {
     let diff = getDifference(num1, num2);
     let absDiff = getAbsValue(diff);
     return absDiff;
   }
   
   console.log(getAbsoluteDifference(14, 2))