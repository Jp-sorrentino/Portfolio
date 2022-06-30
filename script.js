const elementImg = document.getElementById("pj-img") 
const elemenLink = document.getElementById("pj-link") 

console.log(elementImg.src)
let i = 0;


function mudarImagem() {
    i++;
    if (i == 1) {
        elementLink.href = "https://github.com/Jp-sorrentino/Projetos-Js";
        elementImg.setAttribute("src", "assets/img/projeto1.jpg");

    } else if (i == 2) { 
        elementLink.href = "https://github.com/Jp-sorrentino/Pj2-Pokedex";
        elementImg.setAttribute("src", "assets/img/projeto3.jpg");

    } else if (i == 3) {
        elementLink.href = "https://github.com/Jp-sorrentino/Humor-Game";
        elementImg.setAttribute("src", "assets/img/projeto2.jpg");}
    if (i > 2){
            i = 0;
         
}
}
