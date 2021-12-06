function carregar(){    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        //BOM DIA 
        img.src = 'imagens/manha.png'
        document.body.style.background = '#FEB76F' 
    }else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#964B19' 
    }else{
        //BOA NOITE
        img.src = 'imagens/noite.png'
        document.body.style.background = '#243840' 
    }
}