var icon = document.getElementById("icon");

icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src = "images/sun.png";
  }else{
      icon.src = "images/vecteezy_moon-icon-png_17059174.png"
  }
}

const presprojs = document.querySelectorAll(".presproj");

document.addEventListener("scroll", function(){
  presprojs.forEach(presproj => {
      if(isInView(presproj)) {
        presproj.classList.add("presproj--visible")
      }
  });
});

function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.top <
      (window.innerHeight - 150 || document.documentElement.
        clientHeight - 150)
  )
}

const pres = document.querySelectorAll(".pres");

document.addEventListener("DOMContentLoaded", function() {
  pres.forEach(pres => {
    if (isInView(pres)) {
      pres.classList.add("pres--visible");
    }
  });
});


document.addEventListener("scroll", function(){
  pres.forEach(pres => {
      if(isInView(pres)) {
        pres.classList.add("pres--visible")
      }
  });
});

function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.top <
      (window.innerHeight - 150 || document.documentElement.
        clientHeight - 150)
  )
}



