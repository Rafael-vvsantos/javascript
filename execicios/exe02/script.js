function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var form_Ano = document.getElementById('txtano')//id da caixa de texto
    var res = document.querySelector('div#res')
    if(form_Ano.value.length == 0 || Number(form_Ano.value) > ano){
        alert('[Erro] Verificar se os dados estão corretos!')
    }else{
       var form_Sex = document.getElementsByName('radsex')
       var idade = ano - Number(form_Ano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id' , 'foto')
       if (form_Sex[0].checked){
           genero = 'Homem'
           if (idade <= 10){
               img.setAttribute('src' , 'crianca-homen.png')
           }else if (idade <= 20){
               img.setAttribute('src' , 'jovem-homen.png')
           }else if (idade <= 60){
                img.setAttribute('src' , 'aulto-homen.png')
            }else{
                img.setAttribute('src' , 'idoso-homen.png')
            }
       }else if (form_Sex[1].checked){
           genero = 'Mulher'
           if (idade <= 10){
                img.setAttribute('src' , 'crianc-mulher.png')
            }else if (idade <= 20){
                img.setAttribute('src' , 'jovem-mulher.png')
            }else if (idade <= 60){
                img.setAttribute('src' , 'adulta-mulher.png')
            }else{
                img.setAttribute('src' , 'idosa-mulher.png')
            }
       }

       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos um ${genero} com ${idade} anos de idade. `
       res.appendChild(img)
    }
}