const ul = document.querySelector("ul");

const counterElement = document.querySelector("#counter");
counterElement.onclick = generateList;

const deleteElement = document.querySelector("#delete");
deleteElement.onclick = deleteList;

let x = 10;
const increase = document.querySelector("#plus")
increase.addEventListener("click", function () {
  x++;
});

const minus = document.querySelector("#minus")
minus.addEventListener("click", function () {
  x--;
});

/*
const listItems = document.querySelectorAll("li")
console.log(listItems);
const deleteAll = document.querySelector("#clear")
deleteAll.addEventListener("click", function(){
  liRemove;
});
*/
function generateList() {
  for (let i = 1; i <= x; i++) {
    const li = document.createElement("li");
    li.innerText = i;
    ul.appendChild(li);
  }
}

function deleteList() {
  const liRemove = ul.lastElementChild;
  if (liRemove) {
    ul.removeChild(liRemove);
  } else {
    console.log("Hey, es gibt keine Listenelemente mehr!!!");
    alert("Hey, es gibt keine Listenelemente mehr!!!")
  }
}


