const elementImg = document.getElementById("pj-img") 
const elemenLink = document.getElementById('pj-link')
console.log(elementImg)
console.log(elemenLink)
let i = 0;


function mudarImagem() {
    i++;
    if (i == 1) {
        elementLink = "https://github.com/Jp-sorrentino/Projetos-Js";
        elementImg.setAttribute("src", "assets/img/projeto1.png");

    } else if (i == 2) { 
        elementLink = "https://github.com/Jp-sorrentino/Pj2-Pokedex";
        elementImg.setAttribute("src", "assets/img/projeto3.jpg");

    } else if (i == 3) {
        elementLink = "https://github.com/Jp-sorrentino/Humor-Game";
        elementImg.setAttribute("src", "assets/img/projeto2.png");}
    if (i > 2){
            i = 0;
         
}
}
