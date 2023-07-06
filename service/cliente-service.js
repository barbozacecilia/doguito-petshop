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

export const clientServices = {
    customerList
}
 



