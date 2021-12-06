function contar(){
    var inicio = document.getElementById('iNumero')
    var fim = document.getElementById('fNumero')
    var passo = document.getElementById('pNumero')
    var res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[Erro] Verificar se os dados estão corretos!')
    }else {
        res.innerHTML = 'Contando...<br>'

        var ini = Number(inicio.value)
        var fm = Number(fim.value)
        var pas = Number(passo.value)

        if (pas == 0 ){
            alert('[Erro] não pode ser a realizada a contagem com 0!')
            pas = 1
        }
        if(ini < fm){
            for ( var i = ini; i <= fm ; i+= pas ){
                res.innerHTML += `${i}`
            }
        }else{
            for ( var i = ini; i >= fm ; i-= pas ){
                res.innerHTML += `${i}`
            }  
        }
        
        
    }
}