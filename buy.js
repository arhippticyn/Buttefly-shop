const payForm = document.querySelector('.forms');
const login = document.getElementById('login');
const email = document.getElementById('email');
const card = document.getElementById('card');
const loader = document.querySelector('.spinner-border');
const isSuccess = true;
const infominfo = document.querySelector('.info');

payForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const info = {
        name: login.value,
        email: email.value,
        card: card.value,
    };


    payForm.classList.add('delete');
    loader.style.display = 'block';


    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSuccess) {
                loader.style.display = 'none';
                resolve(`Success\nInfo:\nName: ${info.name}\nEmail: ${info.email}\nCard Number: ${info.card}`);
            } else {
                loader.style.display = 'none';
                reject('Error: Operation failed.');
            }
        }, 3000); 
    });


    promise
        .then(value => {
            alert(value); 
        })
        .catch(error => {
            alert(error); 
        });
});
