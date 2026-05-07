// REVEAL ANIMATION

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const top = element.getBoundingClientRect().top;

    if(top < windowHeight - 100){
      element.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// BOTÃO VOLTAR AO TOPO

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if(window.scrollY > 400){
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});


// EFEITO DE ENTRADA NOS ITENS

const items = document.querySelectorAll(".item");

items.forEach((item, index) => {

  item.style.opacity = "0";
  item.style.transform = "translateY(30px)";

  setTimeout(() => {

    item.style.transition = ".6s ease";
    item.style.opacity = "1";
    item.style.transform = "translateY(0)";

  }, index * 120);

});