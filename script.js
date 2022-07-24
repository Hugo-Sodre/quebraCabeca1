var id_Origem =0
var id_Destino =0
var conteudoOrigem =0
var conteudoDestino =0

document.querySelectorAll("div").forEach( function(div) {
    
    div.addEventListener("click", function(event) {
    const obj = event.target 
    const id = obj.id
    console.log(id)
    
    var conteudo = $('#'+ id).html()
    console.log(conteudo)

  
  });
});