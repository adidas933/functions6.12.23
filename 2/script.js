/* 
.2 בנה פונקציה המקבלת 2 מספרים ומחזירה את התוצאה של הראשון בחזקת השני.
*/

function exponent(num1, num2) {
  return num1 ** num2;
}

const exponentVariable = exponent(2, 4);

document.write(exponentVariable);