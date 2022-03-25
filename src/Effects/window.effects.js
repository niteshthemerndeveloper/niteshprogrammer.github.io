(function effects() {
  window.addEventListener("scroll", () => {
    const reveal = document.querySelectorAll(".reveal");

    for (let x = 0; x < reveal.length; x++) {
      let winHeight = window.innerHeight;
      let revealTop = reveal[x].getBoundingClientRect().top;
      let revealPoint = 50;

      if (revealTop < winHeight - revealPoint) {
        reveal[x].classList.add("active");
      } else {
        reveal[x].classList.remove("active");
      }
    }
  });

  window.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor");
    // following cursor when the move moves
    let x = e.pageX,
      y = e.pageY;
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    if (window.innerWidth > 770) cursor.style.display = "block";
  });

  window.addEventListener("mouseout", (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.display = "none";
  });
})();

export function typing() {
  const texts = ["Developer", "Learner", "Coder"];
  let count = 0,
    index = 0,
    currentText = "",
    letter = "";

  (function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    if (document.querySelector(".typing"))
      document.querySelector(".typing").innerHTML = letter;
    if (letter.length === currentText.length) {
      count++;
      index = 0;
    }
    setTimeout(type, 300);
  })();
}
