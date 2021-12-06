function converter(){
    var metros = document.getElementById('metro')
    var res = document.getElementById('res')

    if(metros.value.length == 0){
        alert('[Erro] Verificar se os dados estão corretos!')
    }else{
        res.innerHTML =`A distância de ${valorMedida}, corresponde a... <br>`
        var formMedida = document.getElementsByName('radmed') //pegando o valor do formulaario
        var valorMedida = Number(metros.value)
        var tipoMedida  = ' '
        var valorConversao = 0

        if(formMedida[0].checked){
            tipoMedida = 'Quilômetros (km)'
            valorConversao = valorMedida / 1000
        }else if (formMedida[1].checked){
            tipoMedida = 'Hectômetros(hm)'
            valorConversao = valorMedida / 100
        }else if (formMedida[2].checked){
            tipoMedida = 'Decâmetros (dam)'
            valorConversao = valorMedida / 10
        }else if (formMedida[3].checked){
            tipoMedida = 'Decímetros (dm)'
            valorConversao = valorMedida * 10
        }else if (formMedida[4].checked){
            tipoMedida = 'Centímetros (cm)'
            valorConversao = valorMedida * 100
        }else if (formMedida[5].checked){
            tipoMedida = 'Milimetros (mm)'
            valorConversao = valorMedida * 1000
        }
        
        res.innerHTML =`${valorConversao} ${tipoMedida}`
    }

    
}