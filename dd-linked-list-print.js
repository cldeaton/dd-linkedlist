
function print(obj){
  let newArr = [];
  printObj(obj);

  function printObj(obj) {
    for (var key in obj) {
      var value = obj[key];
      if (typeof value === 'object') {
        printObj(value);
      } else if (typeof value === "string") {
        newArr.push(value);
      }
    }
  }
  let printArr = newArr.toString().replace(/,/g, "->")
  return printArr;
}


module.exports = print;
