const db = firebase.database();
const auth =firebase.auth();

const agregarBtn = document.getElementById('agregarBtn');
const names = document.getElementById('name');
const number = document.getElementById('number');
//Atributos globales
let idUser;

//Para saber quien está agregando
auth.onAuthStateChanged(
    (user) =>{
        console.log(user.uid);
        db.ref('users/registrados/'+user.uid).once(
            'value',
            (data)=>{
                let userDB = data.val();
                idUser = userDB.id;
                console.log(idUser);
                //username.innerHTML = userDB.nombre;
            }
        );
    }
);

const agregarContact = () =>{
    let referencia = db.ref('contactos/'+idUser).push();
    let contactos = {
        idPadre: idUser,
        id: referencia.key,
        nombre: names.value,
        numero: number.value,
    };
    referencia.set(contactos);
    window.location.href = 'home.html';
}

agregarBtn.addEventListener('click', agregarContact);
