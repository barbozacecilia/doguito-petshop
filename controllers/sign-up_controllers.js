import {clientServices} from "../service/cliente-service.js"

const formSignUp = document.querySelector("[data-form]")

formSignUp.addEventListener("submit", (event)=>{
    event.preventDefault()
    const nameUser = document.querySelector("[data-name]").value;
    const emailUser  = document.querySelector("[data-email]").value;
    
    clientServices.createUser(nameUser, emailUser).then(() =>{
        window.location.href = "/screens/registro_completado.html"

    }).catch((err) => console.log(err))
})
