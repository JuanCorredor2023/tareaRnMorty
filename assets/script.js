/*
El estudiante deberá desarrollar una aplicación web, que permita iniciar sesión, para esto se podra hacer con 
un usuario y una contraseña establecidas en una variable
Al iniciar sesión este deberá darle acceso al usuario a una ventana 
donde se use el api de rick and Morty donde se muestren los personajes solicitados por el usuario
Ya sea que solo quiera 1 personaje
Que quiera varios personajes
O que desee limpiar la pantalla
Restricciones -- Se debe hacer uso de Bootstrap 4.6 y se pude usar Css
*/

// let con = prompt(`Cual es tu contraseña?`)

// console.log(con)
let user = `juan_`
let con = `1234`
if(user === "" || con === ""){
    alert("Error")
}else{
function verify(){

let userAns = document.getElementById(`userName`).value

let conAns = document.getElementById(`password`).value

if(user === userAns && con === conAns ){
    window.open(`./tarea/index.html`)

}else{
    alert(`Error: La contraseña o el usuario no son correctos`)
        }
    }
}