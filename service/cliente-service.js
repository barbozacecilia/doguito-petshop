// Fetch API

const customerList = () => fetch("http://localhost:3000/perfil").then((response) => response.json());

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
    });
    };

    const deleteUser =(id) =>{
        return fetch(`http://localhost:3000/perfil/${id}`, {
            method: "DELETE",
        });
    };

    const detailUser =(id) =>{
        return fetch(`http://localhost:3000/perfil/${id}`).then((response)=>response.json())
    };

    const updateUser =(nameUser, emailUser, id) =>{
        return fetch(`http://localhost:3000/perfil/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify({nameUser, emailUser})
        }).then((response)=> response)
        .catch((error)=>console.log(error))
    }

export const clientServices = {
    customerList,
    createUser,
    deleteUser,
    detailUser,
    updateUser,
};
 



