//Random placeholder generator
var phrases = [
  "So what's the plan?🧐",
  "Time to kill those tasks!😎",
  "What's on your mind?🤔",
  "The only easy day was yesterday!👊",
  "What's your next move?🤔",
  "Keep going!👍",
];
var placeholder = phrases[Math.floor(Math.random() * phrases.length)];
document.getElementById("item-input").setAttribute("placeholder", placeholder);

var close = document.getElementsByClassName("delete-btn");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("item-input").value;
  var span = document.createElement("span");
  span.classList.add("item-text");
  span.innerHTML = inputValue;
  li.appendChild(span);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("my-ul").appendChild(li);
  }

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  li.prepend(checkbox);

  var button = document.createElement("button");
  button.classList.add("delete-btn");
  button.innerHTML = "&times;";
  li.appendChild(button);

  button.addEventListener("click", function () {
    li.style.display = "none";
  });

  checkbox.addEventListener("click", function () {
    span.classList.toggle("crossed-out");
  });
}
