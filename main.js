let title = document.querySelector(".title");
let turn = "x";
let squeres = [];

let hide = document.getElementById("hide");

function end(num1, num2, num3) {
  title.innerHTML = `${squeres[num1]}  Winner`;
  document.getElementById("item" + num1).style.backgroundImage =
    "URL(image-80x80.jpg)";
  document.getElementById("item" + num2).style.backgroundImage =
    "URL(image-80x80.jpg)";
  document.getElementById("item" + num3).style.backgroundImage =
    "URL(image-80x80.jpg)";
  //SIZE
  document.getElementById("item" + num1).style.backgroundSize = "contain";
  document.getElementById("item" + num2).style.backgroundSize = "contain";
  document.getElementById("item" + num3).style.backgroundSize = "contain";
  //repeat

  document.getElementById("item" + num1).style.backgroundRepeat = "no-repeat";
  document.getElementById("item" + num2).style.backgroundRepeat = "no-repeat";
  document.getElementById("item" + num3).style.backgroundRepeat = "no-repeat";

  // document.body.style.backgroundImage =
  //   "url(375338_189783911101848_1277966004_n.jpg)";
  // document.body.style.backgroundSize = "contain";
  // document.body.style.backgroundRepeat = "repeat";

  hide.style.display = "flex";

  setInterval(function () {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(function () {
    location.reload();
  }, 3000);
}

function winner() {
  for (let i = 1; i < 10; i++) {
    squeres[i] = document.getElementById("item" + i).innerHTML;
  }
  if (
    squeres[1] == squeres[2] &&
    squeres[2] == squeres[3] &&
    squeres[1] != ""
  ) {
    end(1, 2, 3);
  } else if (
    squeres[4] == squeres[5] &&
    squeres[5] == squeres[6] &&
    squeres[5] != ""
  ) {
    end(4, 5, 6);
  } else if (
    squeres[7] == squeres[8] &&
    squeres[8] == squeres[9] &&
    squeres[8] != ""
  ) {
    end(7, 8, 9);
  } else if (
    squeres[1] == squeres[4] &&
    squeres[4] == squeres[7] &&
    squeres[7] != ""
  ) {
    end(1, 4, 7);
  } else if (
    squeres[2] == squeres[5] &&
    squeres[5] == squeres[8] &&
    squeres[5] != ""
  ) {
    end(2, 5, 8);
  } else if (
    squeres[3] == squeres[6] &&
    squeres[6] == squeres[9] &&
    squeres[9] != ""
  ) {
    end(3, 6, 9);
  } else if (
    squeres[1] == squeres[5] &&
    squeres[5] == squeres[9] &&
    squeres[5] != ""
  ) {
    end(1, 5, 9);
  } else if (
    squeres[3] == squeres[5] &&
    squeres[5] == squeres[7] &&
    squeres[5] != ""
  ) {
    end(3, 5, 7);
  }
}

function game(id) {
  let element = document.getElementById(id);
  if (turn === "x" && element.innerHTML == "") {
    element.innerHTML = "X";
    turn = "o";
    title.innerHTML = "O Turn";
  } else if (turn === "o" && element.innerHTML == "") {
    element.innerHTML = "O";
    turn = "x";
    title.innerHTML = "X Turn";
  }
  winner();
}

function restart() {
  location.reload();
}
