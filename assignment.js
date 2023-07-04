function changecolor() {
  var colorInput = document.getElementById("color").value;
  var myDiv = document.getElementById("textchange");
  myDiv.style.color = colorInput;
}

const arr = ["dogs", "car", "rabbit", "rat", "mice"];
arr.forEach((animal) => {
  const points = animal.includes("a");
  console.log(`${animal}: ${points}`);
});

const filteredArr = arr.filter((animal) => {
  return animal.includes("a");
});
console.log(filteredArr);

const nowDate = new Date();

console.log(nowDate.getDate());
console.log(nowDate.getDay());
console.log(nowDate.getFullYear());
console.log(nowDate.getHours());
console.log(nowDate.getMilliseconds());
console.log(nowDate.getMinutes());
console.log(nowDate.getMonth());
console.log(nowDate.getSeconds());
console.log(nowDate.getTime());
console.log(nowDate.getTimezoneOffset());
console.log(nowDate.getUTCDate());
