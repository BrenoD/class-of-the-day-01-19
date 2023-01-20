function bibi(min, max) {
    const valor = Math.random() * (max, min) + min
    return Math.floor(valor)
}
//Aplicando o Do
let opcao = -10

do {
    opcao = (bibi(-10, 50))
    console.log('Escolheu' + opcao)

} while (opcao != -10)
//ele simplesment executou todo o bloco, mas aasim que pegou o -10,
// ele parou, msm sendo o valor do -10, o do ignorou e executou o bloco
