// Fetch API

const customerList =()=> fetch("http://localhost:3000/perfil").then((response)=> response.json());

//promise
// const customerList = ()=>{
//     const promise = new Promise((resolve, reject)=>{
//     const http = new XMLHttpRequest();
//     http.open("GET", "http://localhost:3000/perfil");

//     http.send();

//     http.onload = () => {
//         const response = JSON.parse(http.response);
//             if (http.status >= 400) {
//                 reject(response)
//             }else{
//                 resolve(response)
//             }
//         };
//     })
//     return promise
// };

const createUser = (nameUser, emailUser) =>{
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({nameUser, emailUser, id: uuid.v4() }),
    })
    }

export const clientServices = {
    customerList,
    createUser,
}
 



