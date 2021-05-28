const agregarBtn = document.getElementById('agregarBtn');
const email = document.getElementById('email');
const password = document.getElementById('password');

const db = firebase.database();
const auth = firebase.auth();



agregarBtn.addEventListener('click', ()=>{
    auth.signInWithEmailAndPassword(email.value, password.value).then(
        (data)=>{
            window.location.href = 'home.html';
        }
    ).catch(
        (error)=>{
            alert('No está registrado');
        }
    );
});


