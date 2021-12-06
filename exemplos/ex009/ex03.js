var agora = new Date()
var diaSemana = agora.getDay()
var dataSemana = agora.getDate()
var horasemna = agora.getHours()
var minutos = agora.getMinutes()
var segundos = agora.getSeconds()

switch (diaSemana){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}

console.log(`dia ${dataSemana}, e são extamente ${horasemna} : ${minutos} : ${segundos}`)