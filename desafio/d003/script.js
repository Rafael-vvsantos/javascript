function tabuada(){
    var inicio = document.getElementById('nInicio')
    var fim = document.getElementById('nFim')
    var tab = document.getElementById('seltab')
    
    
    if (inicio.value.length == 0 ){
        alert('[Erro] Verificar se os dados estão corretos!')
    }else {
        var n1 = Number(inicio.value) 
        var n2 = Number(fim.value)

        for(var i = n1; i <= n2; i++){    
            var item = document.createElement('option')
            item.text += `${n1} x ${i} = ${n1 * i} ` 
            tab.appendChild(item)
            
        }

       
        
    }
}