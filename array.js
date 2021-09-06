
const alunos = [
    { nome: "Ashley", prova: { p1: 5.6, p2: 6.7, p3: 9 } },
    { nome: "Sabrina", prova: { p1: 6.3, p2: 7.5, p3: 10 } },
    { nome: "Samantha", prova: { p1: 8, p2: 9.2, p3: 7 } },
    { nome: "Andreia", prova: { p1: 9, p2: 8, p3: 10 } },
    { nome: "Raquel", prova: { p1: 10, p2: 9.7, p3: 5 } },
    { nome: "Amanda", prova: { p1: 2, p2: 4.6, p3: 9.9 } },
    { nome: "Pietra", prova: { p1: 8.3, p2: 3.1, p3: 9.8 } },
    { nome: "Jaqueline", prova: { p1: 3.4, p2: 7.2, p3: 6.8 } },
    { nome: "Alessandra", prova: { p1: 1.4, p2: 2.7, p3: 6.9 } },
    { nome: "Jane Kelly", prova: { p1: 7, p2: 5.5, p3: 9.1 } },
]


// Fazer uma função que retorne um array de todas as médias 

function retornaMedia(prova) {
    const qtPontos = ((prova.p1 + prova.p2 + prova.p3) / 3).toFixed(1)
    return qtPontos
}

const aprovades = aprovades => aprovades >= 7
const media_alunes = alunos.map(alune => {
    const media = retornaMedia(alune.prova)
    return {
        nome: alune.nome,
        media,
        aprovades: aprovades(media)
    }
})
// Fazer uma função que retorne um array de nome das reprovadas e aprovadas
const alunes_aprovades = media_alunes.filter(aprovades => aprovades.media >= 7).sort((a, b) => a.media - b.media).reverse()
const alunes_reprovades = media_alunes.filter(reprovades => reprovades.media < 7).sort((a, b) => a.media - b.media)
console.log(media_alunes)
console.log(alunes_reprovades)
console.log(alunes_aprovades)
console.log(alunes_aprovades[0])
console.log(alunes_reprovades[0])