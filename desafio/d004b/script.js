function verificar() {
    var nProduto = document.getElementById('produto')
    var vProduto = document.getElementById('valor')
    var vPago = document.getElementById('troco')
    var res = document.querySelector('div#res')
   

    /*---------------------------*/
    var nomeP = String(nProduto.value)
    var pProduto = Number(vProduto.value)
    var pPago = Number(vPago.value)
    var troco 

    
    if(vProduto.value.length <= 0 || vPago.value.length <= 0  || nProduto.value.length == 0){
        alert('[Error]')
    }else {
        if (pProduto < pPago) {
            res.innerHTML = "Operação concluida "
            troco = pPago - pProduto
        }else{
            alert("[Error] Informe os valores corretamente!")
        }
    }

    
    res.innerHTML = `Você acaba de comprar ${nomeP} que custou R$ ${pProduto}.` + ` Deu R$ ${pPago} em dinheiro e vai receber r$ ${troco} de troco`

    
}