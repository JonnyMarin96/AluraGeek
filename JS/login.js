const validarUsuario = () => {
    const usuario = document.getElementById('usuario')
    if(usuario.value === "admin"){
        usuario.style.border = "none"
        return true
    }else{
        usuario.style.border = "solid 2px red"
        return false
    }
}

const validarContrasena = () => {
    const contrasena = document.getElementById('contrasena')
    if(contrasena.value === "admin"){
        contrasena.style.border = "none"
        return true
    }else{
        contrasena.style.border = "solid 2px red"
        return false
    }
}

const iniciarSecion = () => {
    const flagContraseña = validarContrasena()
    const flagUsuario = validarUsuario()

    if(flagContraseña === true && flagContraseña === true){
        localStorage.setItem("Admin", "true")
    }
}





const boton = document.querySelector('button')
boton.addEventListener("click", (e) => {
    e.preventDefault()
    iniciarSecion()
})
