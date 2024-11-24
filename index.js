const catItems = document.querySelector('.header-katalog-items')
const catBtn = document.querySelector('.header-katalog-cap')
const payForm = document.querySelector('.forms')
const login = document.getElementById('login')
const email = document.getElementById('email')
const card = document.getElementById('card')
const loader = document.querySelector('.spinner-border')

catBtn.addEventListener('click', () => {
    catItems.classList.toggle('show')
})

payForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const info = {
        name: login.value,
        email: email.value,
        card: card.value,
    }


    setTimeout(() => {
        payForm.classList.add('delete')
    }, 2000)

    loader.style.display = 'block'

    const promise = new Promise((resolve,reject)=> {
        setTimeout(() => {
            loader.style.display = 'none'
    alert(`Success \nInfo: \nName:${info.name} \nEmail: ${info.email} \nCard Number: ${info.card}`)

        })
    }, 2000)

    promise.then(value=>{
        alert(value)
    }).catch(error=>{
        alert(error)
    })
})