function tabuada() {
    var numero = document.getElementById('tab')
    var tab = document.getElementById('seltab')
    

    if (numero.value.length == 0){
        alert('Por favor digite um numero!')
    }else{
        v
        var num = Number(numero.value)
        tab.innerHTML = ''
        for( var i = 0; i <= 10; i++){
            var item = document.createElement('option')
            item.text += `${num} x ${i} = ${num * i} ` 
            tab.appendChild(item)
        }
    }
}