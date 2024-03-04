var leonardo = window.document.getElementById("leo")
var bart = window.document.getElementById("bart")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var setaDireita = window.document.getElementById("seta-direita")

function rolarParaDireita(){
    leonardo.style = "display:none"
    bart.style = "display:flex"
    setaEsquerda.style = "display:flex"
    setaDireita.style = "display:none"
    bruna.style = "margin:40px"
}   

function rolarParaEsquerda(){
    bart.style = "display: none"
    leonardo.style = "display: flex"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "diplay: none"

}

