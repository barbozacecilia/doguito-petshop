import {clientServices} from "../service/cliente-service.js"

const createNewLine = (nameUser, emailUser) => {
    const linea = document.createElement("tr");
    const contenet = `
        <td class="td" data-td>${nameUser}</td>
        <td>${emailUser}</td>
        <td>
        <ul class="table__button-control">
            <li>
            <a
                href="../screens/editar_cliente.html"
                class="simple-button simple-button--edit"
                >Editar</a
            >
            </li>
            <li>
            <button
                class="simple-button simple-button--delete"
                type="button"
            >
                Eliminar
            </button>
            </li>
        </ul>
        </td>`;
    linea.innerHTML = contenet;
    return linea
}
const table = document.querySelector("[data-table]");

clientServices.customerList().then((data) => {
    data.forEach((perfil) => {
        const newLinea = createNewLine(perfil.nameUser, perfil.emailUser);
        table.appendChild(newLinea);
     });
    
}).catch((error) => alert('hubo un error'))