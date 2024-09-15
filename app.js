const currentDate = document.getElementById("currentDate");

const dateString = new Date();

const year = dateString.getFullYear();
const month = dateString.getMonth();
const day = dateString.getDate();

const finalString = `${day}-${month}-${year}`

currentDate.innerText = finalString

// console.log(finalString);
