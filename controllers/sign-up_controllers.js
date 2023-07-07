import {clientServices} from "../service/cliente-service.js"

const formSignUp = document.querySelector("[data-form]")

formSignUp.addEventListener("submit", (event)=>{
    event.preventDefault()
    const nameUser = document.querySelector("[data-name]").value;
    const emailUser  = document.querySelector("[data-email]").value;
    console.log(nameUser, '-', emailUser)
    
    clientServices.createUser(nameUser, emailUser).then((response) =>{
        window.location.href = "/screens/registro_completado.html"

    }).catch((error) => console.log(error))
})