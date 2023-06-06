var cookies = 0
var four = 1
function cookiesFunc() {
  cookies = cookies + four;
  let paragraphe = "Vous avez " + cookies.toString() + " cookies";
  document.getElementById("nbcookies").innerHTML = paragraphe;
}
function cuire() {
  if (cookies >= 25) {
    cookies = cookies - 25;
    four = four + 1;
    console.log("hey")
    let paragraphe = "Vous avez " + cookies.toString() + " cookies";
    document.getElementById("nbcookies").innerHTML = paragraphe;
    console.log("hey2")
    let paragraphe2 = "Vous avez " + four.toString() + "      fours";
    document.getElementById("fours").innerHTML = paragraphe2;
  }
  else {
    alert("Tu n'a pas assé de cookies pour acheter un nouveau four");
  }
}


