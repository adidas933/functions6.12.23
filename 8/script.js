/* 
.8 כתוב פונקציה המקבלת מספר ומציגה שורת כוכביות באורך המספר.
*/

function pyramid(num) {
  let output = '';
  for (let i = 0; i < num; i++) {
    output += '*';
  }
  return output;
}

const pyramidVar = pyramid(3);
document.write(pyramidVar);