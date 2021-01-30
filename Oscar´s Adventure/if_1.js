let m = 1;

function startGame() {
  if (m === 1){
    document.querySelector("#text").innerHTML = "You are reading a book when a strange cat appears. What do you do?";
    document.querySelector("#images").src = "oskar1.jpg";
    document.querySelector("#btn1").value = 'Pet him';
    document.querySelector("#btn2").style.display='block';
    document.querySelector("#btn2").value = 'Remove him';
    document.querySelector("#btn3").style.display='none';
    document.querySelector("#btn4").style.display='none';
    document.querySelector("#btn1").addEventListener("click", map2);
    function map2() {
      m = 2;
      startGame();
    }
    document.querySelector("#btn2").addEventListener("click", map3);
    function map3() {
      m = 3;
      startGame();
    }
  } else if (m === 2) {
    document.querySelector("#text").innerHTML = "You pet the cat.";
    document.querySelector("#images").src = "oskar1a.jpg";
    document.querySelector("#btn1").value = 'Play again';
    document.querySelector("#btn2").style.display='none';
    document.querySelector("#btn3").style.display='none';
    document.querySelector("#btn4").style.display='none';
    document.querySelector("#btn1").addEventListener("click", map3);
    function map3() {
      m = 1;
      startGame();
    }
  } else if (m === 3) {
    document.querySelector("#text").innerHTML = "The cat scratches you.";
    document.querySelector("#images").src = "oskar1b.jpg";
    document.querySelector("#btn1").value = 'Play again';
    document.querySelector("#btn2").style.display='none';
    document.querySelector("#btn3").style.display='none';
    document.querySelector("#btn4").style.display='none';
    document.querySelector("#btn1").addEventListener("click", map3);
    function map3() {
      m = 1;
      startGame();
    }
  } else {
      document.querySelector("#text").innerHTML = "Nothing works";
  }
}

startGame()