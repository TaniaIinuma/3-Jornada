function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;

while(contador < listaDeTeclas.length){
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "#som_"+efeito;
    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    }
    contador = contador + 1;
   
}








































/*function tocaSomVaia(){
        document.querySelector("#som_tecla_vaia").play();
        }*/
    


//listaDeTeclas[1].onclick = tocaSomVaia; 


















//listaDeTeclas[1].onclick = tocaSomVaia;



/*function tocaSomVaia(){
    document.querySelector("#som_tecla_vaia").play();
    }*/