function datos() {
    var nombre = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("email").value;
    var fecha = document.getElementById("fecha-nacimiento").value;
    var genero = document.getElementById("f").value;
    var genero = document.getElementById("m").value;
    var estatura = document.getElementById("estatura").value;
    var peso = document.getElementById("q").value;
    var deporte = document.getElementById("deporte").value;
    var enviar = document.getElementById("enviar").value;

    console.log("Hola " + nombre + apellidos + " tu correo es " + correo + " naciste en " + fecha + genero + " mides " + estatura + " pesas " + peso + " ¿realizas deporte? " + deporte + enviar);
    alert("Hola " + nombre + apellidos + " tu correo es " + correo + " naciste en " + fecha + genero + " mides " + estatura + " pesas " + peso + " ¿realizas deporte? " + deporte + enviar);
   
}