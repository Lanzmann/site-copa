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

document.querySelector('#app').innerHTML = `
    <header>
        <img src="/assets/logo.svg" alt="">
    </header>
    <main id="cards">
        ${criaCartão('24/11', 'quinta', criaJogo('brazil', 'serbia', '13:00'))}
        ${criaCartão('28/11', 'segunda', criaJogo('brazil', 'germany', '13:00'))}
        ${criaCartão('30/11', 'sábado', criaJogo('brazil', 'argentina', '14:00'))}
    </main>
`