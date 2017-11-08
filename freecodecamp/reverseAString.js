
function reverseString(str) {
  var array = [];
  array = str.split("");
  console.log (array);
  array.reverse();
  console.log(array);
  console.log("after join");
  var reverseStr = array.join("");
  
  
  return reverseStr;
}

reverseString("hello");
console.log (reverseString ("Xiaoqi Zhou"));