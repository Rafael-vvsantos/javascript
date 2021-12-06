let num = document.getElementById('num')
let lista = document.getElementById('listaNum')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        var n = Number(num.value)
        valores.push(n)
        var item = document.createElement('option')
        item.text +=  `Valor ${n} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('Valor inválido ou já está na lista')
    }
    num.value = ''
    num.focus()
}



function finalizar(){
    
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let medi = 0

        for(let i in valores){
            soma += valores[i] 
            if(valores[i] > maior){
                maior = valores[i]
            }else if (valores[i] < menor){
                menor =valores[i]
            }
        }
        
       
        medi = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor inofrmado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor inofrmado foi ${menor}.</p>`
        res.innerHTML += `<p> A somando todos valores temos ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores é ${medi}.</p>`
        
    }
}

/*function finalizar(){
    
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        for(let i in valores){
            if(valores[i] > maior){
                maior = valores[i]
            }else if (valores[i] < menor){
                menor =valores[i]
            }
        }
        let soma
        for (let i in valores){
            soma = valores[i] + valores[i - 1]
        }
        let medi
        medi = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor inofrmado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor inofrmado foi ${menor}.</p>`
        res.innerHTML += `<p> A somando todos valores temos ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores é ${medi}.</p>`
        
    }
}*/