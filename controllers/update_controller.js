import { clientServices } from "../service/cliente-service.js";

const formUpdate = document.querySelector("[data-form]")

const getUserInf = ()=> {
    const url = new URL(window.location);
    const id = url.searchParams.get("id")

    if(id=== null){
        window.location.href= "/screens/error.html"
    }

    const nameUser = document.querySelector("[data-nombre]")
    const emailUser = document.querySelector("[data-email]")

    clientServices.detailUser(id).then(perfil => {
        nameUser.value = perfil.nameUser;
        emailUser.value = perfil.emailUser;
    })
}
getUserInf()


formUpdate.addEventListener("submit", (event)=>{
    event.preventDefault()
    const url = new URL(window.location);
    const id = url.searchParams.get("id")

    const nameUser = document.querySelector("[data-nombre]").value
    const emailUser = document.querySelector("[data-email]").value  

    console.log(nameUser, emailUser)
    clientServices.updateUser(nameUser, emailUser, id).then(()=>{
        window.location.href= "/screens/edicion_concluida.html"
    })

})
