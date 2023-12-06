/* 
בנה פונקציה המקבלת 3 מספרים
 ומחזירה את הגדול מביניהם.
  בתוך הפונקציה יש להשתמש
בפונקציה מהתרגיל הראשון
 על מנת למצוא את המספר הגדול מבין שלושת מספרים. )
 אין לשנות
את הפונקציה מהתרגיל הראשון,
 נשתמש באותה פונקציה בדיוק.(
*/

function bigger(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } 
}

function bigger3(num1, num2, num3) {
  if (num3 > num1 && num3 > num2) {
    return num3;
  } else {
    return bigger(num1, num2);
  }
}

const bigger3Var = bigger3(4, 5, 1);

document.write(bigger3Var);
