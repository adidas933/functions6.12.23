/* 
.9 כתוב פונקציה המקבלת מספר n ומציגה כוכביות באופן הבא:

*/

function pyramid(height) {
  let output = '';
  for (let i = 0; i < height; i++) {
    output += '\n';
    for (let j = 0; j < height - i; j++) {
      output += '*';   
    }         
  }
  return output;
}

const pyramidVar = pyramid(5);
document.write(pyramidVar);