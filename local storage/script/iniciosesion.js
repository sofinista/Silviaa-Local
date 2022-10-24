let email, contraseña;

let formulario = document.getElementById('form')

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    LeerDatos()
})

function LeerDatos(){
    nombre = document.getElementById('email').value
    nombre = document.getElementById('contraseña').value

alert(correo + contraseña)
    ValidarDatos(email, contraseña)
    guardarLocalStorage(email, contraseña)

}

function ValidarDatos (email, contraseña) {
    if(email.length==0 ||contraseña.length==0)
swal("Error", "Espacios en blanco", "error");
ListarDatos(email, contraseña)
}

function ListarDatos(email, contraseña){
    let emailUsu = localStorage.setItem('email',email)
    let contraseñaUsu = localStorage.setItem('contraseña',contraseña)
alert(emailUsu, contraseñaUsu)
    if(emailUsu== email && contraseñaUsu==contraseña){
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          });
          window.location.href = 'landing.html'
    }else[
        swal("Error", "Espacios en blanco", "error")
    ]
}