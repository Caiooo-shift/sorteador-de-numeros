

function gerarNumero() {
   const ValorMin = Math.ceil(document.querySelector('.input-valor-minimo').value)
   const ValorMax = Math.ceil(document.querySelector('.input-valor-maximo').value)    
   const NumeroSorteado = document.querySelector('.Resultado').textContent
   console.log(NumeroSorteado)
   const result = Math.floor(Math.random() * (ValorMax - ValorMin + 1)) + ValorMin;


   document.querySelector('.Resultado').innerHTML = result;

 



   
}