/* 
כתוב פונקציה המקבלת שני פרמטרים
 המציינים תחום מספרי כלשהו,
  הפונקציה תחזיר מספרי
אקראי בתחום המספרים
*/

const randomFunction = (num1, num2) => {
  const num1Absolute = Math.abs(num1);
  const num2Absolute = Math.abs(num2);
  return Math.round(Math.random() * (num1Absolute - num2Absolute));
};

const randomFunctionVar = randomFunction(-5, 1);

document.write(randomFunctionVar);
