let calcScrollValue = () => {
  let scrollProgress = document.getElementById ("progress");
  let progressValue = document.getElementById ("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none"
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#ff4500 ${scrollValue}%,
  #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


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



