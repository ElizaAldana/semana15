//alert('Funciona');
const agregarBtn = document.getElementById('agregarBtn');
const names = document.getElementById('names');
const number = document.getElementById('number');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


const db = firebase.database();
const auth = firebase.auth();

const register = () =>{
    if(names.value===''||number.value===''||email.value===''||password.value===''){
        alert('Falta un campo por llenar');
        return;
    }
    if(password.value!=password2.value) {
        alert('Las contraseñas no coinciden');
        return;
    }

    auth.createUserWithEmailAndPassword(email.value, password.value).then(
        (data) =>{
            //Depositar los datos
            let user = {
                id:data.user.uid,
                nombre: names.value,
                numero: number.value,
                correo:email.value,
                contraseña: password.value,
                confirmacion: password2.value,
            };

            db.ref('users/registrados/'+user.id).set(user);
        }
    );
    console.log(names.value);
}


agregarBtn.addEventListener('click', register);

