class FilaUser{
    constructor(user){
        this.user = user;
    }

    render = ()=>{
        let component = document.createElement('div');
        component.className = 'filauser';
        let nombreComp = document.createElement('div');
        nombreComp.className = 'nombrecont';
        nombreComp.innerHTML = (
            '<p>'+this.user.nombre+'<p>'
        );
        console.log(this.user.nombre);
        let telefonoComp = document.createElement('div');
        telefonoComp.innerHTML = (
            '<p>'+this.user.numero+'<p>'
        );

        let xBtn = document.createElement('button');
        xBtn.className = 'xBtn';
        xBtn.innerHTML = 'Eliminar contacto';

        component.appendChild(nombreComp);
        component.appendChild(telefonoComp);
        component.appendChild(xBtn);


        xBtn.addEventListener('click',()=>{
            const db = firebase.database();
            db.ref('contactos/'+this.user.idPadre+'/'+this.user.id).set(null);
        });

        return component;
    }
}