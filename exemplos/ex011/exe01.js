let num = [5, 8, 2, 9, 3]


//num.sort() -> antes ele não fica em ordem */
num.push(1)// acrescenta o 1
num.sort()//coloca em ordem

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(4)

if(pos == -1 ){
    console.log('Valor não encontrado')
}else{
    console.log(`Valor 8 está na posição ${pos}`)
}