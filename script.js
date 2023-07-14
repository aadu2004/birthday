function timer() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  document.getElementById("h").innerHTML = h;
  document.getElementById("m").innerHTML = m;
  document.getElementById("s").innerHTML = s;
  let y = today.getFullYear();
  document.getElementById("y").innerHTML = y;
}
timer();
setInterval(timer, 1000);
