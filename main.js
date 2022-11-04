function criaJogo(jogador1, jogador2, hora){
    return `
    <li>
        <img src="/assets/icons/icon=${jogador1}.svg" alt="">
        <strong>${hora}</strong>
        <img src="/assets/icons/icon=${jogador2}.svg" alt="">
    </li>
        `
}



function criaCartão(data, dia, jogos) {
    return `
    <div class="card">
        <h2>${data}<span>${dia}</span></h2>
            <ul>
            ${jogos}
            </ul>
    </div>
    `
}

document.querySelector('#cards').innerHTML = 
    criaCartão('24/11', 'quinta', criaJogo('brazil', 'serbia', '13:00')) +
    criaCartão('28/11', 'segunda', criaJogo('brazil', 'switzerland', '13:00') + criaJogo('portugal', 'uruguay', '16:30')) +
    criaCartão('02/12', 'sexta', criaJogo('brazil', 'cameroon', '16:00'))