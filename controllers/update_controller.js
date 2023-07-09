import { clientServices } from "../service/cliente-service.js";

const formUpdate = document.querySelector("[data-form]")

const getUserInf = async()=> {
    const url = new URL(window.location);
    const id = url.searchParams.get("id")

    if(id=== null){
        window.location.href= "/screens/error.html"
    }

    const nameUser = document.querySelector("[data-nombre]")
    const emailUser = document.querySelector("[data-email]")
    try{
        const perfil =await clientServices.detailUser(id)
        if(perfil.nameUser && perfil.emailUser){
            nameUser.value = perfil.nameUser;
            emailUser.value = perfil.emailUser;
        }else{
            throw new Error()
        }
        
    }catch(e){
        window.location.href = "/screens/error.html"
    }
    
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
