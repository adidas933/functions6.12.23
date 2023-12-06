/* 
.4 בנה פונקציה המקבלת מספר ומחזירה אותו בסדר הפוך.
*/

function reverseMe(number) {
  let reversedNumber = '';
  const numberString = number.toString();
  for (let i = 0; i < numberString.length; i++) {
    reversedNumber = numberString[i] + reversedNumber;
  }
  return reversedNumber;
}

const reverseVar = reverseMe(123123);

document.write(reverseVar);

