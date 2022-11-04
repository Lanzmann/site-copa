function createCard() {
    return `
    <div class="card">
    <h2>24/11<span>quinta</span></h2>

    <ul><li>
        <img src="/assets/icons/icon=brazil.svg" alt="">
        <strong>07:00</strong>
        <img src="/assets/icons/icon=afghanistan.svg" alt="">
    </li>
    <li>
        <img src="/assets/icons/icon=serbia.svg" alt="">
        <strong>17:00</strong>
        <img src="/assets/icons/icon=bulgaria.svg" alt="">
    </li></ul>
</div>
    `
}

document.querySelector('#app').innerHTML = `
<header>
            <img src="/assets/logo.svg" alt="">
        </header>
        <main id="cards">
            ${createCard()}
            ${createCard()}
        </main>
`