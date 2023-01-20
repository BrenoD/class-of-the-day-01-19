function getInteiroaleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao

while (opcao != -1) {
    opcao = getInteiroaleatorioEntre(-1, 40)
    console.log('Opção escolhida foi...' + opcao)
}

console.log('Ate a proxima')

// da pra trolar os amiguinhos
