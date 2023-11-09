function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll(".tecla");


for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador]; 
    const efeito = tecla.classList[1];
    const idAudio = `#som_${efeito}`;
    tecla.onclick = function(){
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