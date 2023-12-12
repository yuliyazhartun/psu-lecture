//какой принцип реализован?

function createGenerator(prefix) {
    let index = 0;
  return function genNewID() {
    index++; 
    return prefix + index.toString();

  };
}
const generateNewID = createGenerator("вызов номер: ");
console.log(generateNewID());
console.log(generateNewID()); 
console.log(generateNewID());

console.log(index);