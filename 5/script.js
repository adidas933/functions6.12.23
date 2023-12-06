/* 
.5 בנה פונקציה המקבלת הודעה ומספר
: הפונקציה תדפיס את ההודעה למשתמש
, תקלוט כמות
מספרים לפי המספר שקיבלה
 ותחזיר את סכום המספרים.
*/

function sum(message, numLength) {
  console.log(message);
  let sum = 0;
  for (let i = 0; i < numLength; i++) {
    let userNumberInput = +prompt(`Enter a number`);
    sum += userNumberInput;
  }
  return sum;
}

const mySumVar = sum(`Hello friend this is your message`, 6);

document.write(mySumVar);