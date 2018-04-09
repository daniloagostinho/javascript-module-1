var endereco = {
    rua: 'Flor de maio',
    numero: 79,
    bairro: 'Centro',
    cidade: 'Sao paulo',
    uf: 'SP'
}
function informacao({ rua, numero, bairro, cidade, uf } = endereco) {
    console.log(`O usuário mora em ${cidade} / ${uf}, no bairro ${bairro}, na rua "${rua}" com nº ${numero}.`)
}

informacao();