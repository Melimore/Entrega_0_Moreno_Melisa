document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("ingresar").addEventListener("click", function(){
        document.getElementById("comprobacion1").innerHTML=" "
        document.getElementById("comprobacion2").innerHTML=" "
        let var_comprueba= true
        if(document.getElementById("emailUser").value==""){
            document.getElementById("comprobacion1").innerHTML="ingresa tu e-mail"
            var_comprueba= false
        }
        if(document.getElementById("contrasenia").value==""){
            document.getElementById("comprobacion2").innerHTML="ingresa tu contraseña"
            var_comprueba= false
        }
        if(var_comprueba==true){
            window.location.replace("principal.html");
        }
    })
})
