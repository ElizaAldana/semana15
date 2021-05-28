const masBtn = document.getElementById('masBtn');
const username = document.getElementById('username');
const usersContainer = document.getElementById('usersContainer');

const db = firebase.database();
const auth = firebase.auth();

//Para saber quien está autenticando
auth.onAuthStateChanged(
    (user) =>{
        console.log(user.uid);
        db.ref('users/registrados/'+user.uid).once(
            'value',
            (data)=>{
                let userDB = data.val();
                username.innerHTML = userDB.nombre;
            }
        );
        db.ref('contactos/'+user.uid).on('value',function(data) {
            usersContainer.innerHTML = '';
            data.forEach(
                contactos => {
                    let userDB = contactos.val();
                    let fila = new FilaUser(userDB);
                    usersContainer.appendChild(fila.render());
                }
            );  
        } 
        );
    }

);



const agregar = () =>{
    window.location.href = 'index.html';
}

masBtn.addEventListener('click', agregar);