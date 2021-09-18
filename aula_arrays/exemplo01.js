let num = [8, 3, 5, 2, 7, 6, 9, 0]
num.push(4)
num.sort()
/*console.log(`nosso vetor tem os ${num} elementos`)
for (let i=0; i <= num.length; i++) {
    console.log(i)
}
*/

// simplificação de codigo
let pos = num.indexOf(1)
if (pos == -1) {
    console.log('valor não encontrado')
} else {
    console.log(pos)
}


for (let i in num) {
    console.log(i)
}
