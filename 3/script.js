/* 
.3 בנה פונקציה המקבלת מספר ומחזירה את העצרת שלו.
*/

function factorial(num) {
  let answer = 1;
  for (let i = 2; i <= num; i++) {
    answer *= i;
  }
  return answer;
}

const factorialVar = factorial(5);

document.write(factorialVar);