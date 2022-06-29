const elementImg = document.getElementById("pj-img") 
console.log(elementImg.src)
let i = 0;


function mudarImagem() {
    i++;
    if (i == 1) {
        elementImg.setAttribute("src", "assets/img/projeto1.jpg");

    } else if (i == 2) { 
        elementImg.setAttribute("src", "assets/img/projeto3.jpg");

    } else if (i == 3) {
        elementImg.setAttribute("src", "assets/img/projeto2.jpg");}
    if (i > 2){
            i = 0;
         
}
}