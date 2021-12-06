function verificar(){
    var num = document.getElementById('num')
    var res = document.getElementById('res')
    num = Number(num.value)
    var antes = num - 1
    var depois = num + 1

    
    res.innerHTML = `Antes de ${num}, temos o numero ${antes}` + ` <br>Depois de ${num}, temos o numero ${depois}`
    
}