import {clientServices} from "../service/cliente-service.js"

const createNewLine = (nameUser, emailUser, id) => {
    console.log(id)
    const linea = document.createElement("tr");
    const contenet = `
        <td class="td" data-td>${nameUser}</td>
        <td>${emailUser}</td>
        <td>
        <ul class="table__button-control">
            <li>
            <a
                href="../screens/editar_cliente.html?id=${id}"
                class="simple-button simple-button--edit"
                >Editar</a
            >
            </li>
            <li>
            <button
                class="simple-button simple-button--delete"
                type="button" id="${id}"
            >
                Eliminar
            </button>
            </li>
        </ul>
        </td>`;
    linea.innerHTML = contenet;

    const btn = linea.querySelector("button")
    btn.addEventListener('click', ()=>{
        const id = btn.id
        clientServices.deleteUser(id).then(response =>{
            console.log(response)
        }).catch(error => alert('ocurrio un error'))
    })

    return linea

}
const table = document.querySelector("[data-table]");

clientServices.customerList().then((data) => {
    data.forEach(({nameUser,emailUser, id }) => {
        const newLinea = createNewLine(nameUser, emailUser, id);
        table.appendChild(newLinea);
     });
    
}).catch((error) => alert('hubo un error'))

