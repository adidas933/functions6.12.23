/* 
בנה פונקציה המקבלת 2 מספרים ומחזירה את הגדול מביניהם
*/

function bigger(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } 
}

const bigFunction = bigger(5, 3);
document.write(bigFunction);