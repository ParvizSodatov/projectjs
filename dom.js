let box=document.querySelector(".box")
// import { selectUser } from "./api.js";
import { serchUser,selectUser } from "./api.js";

function get(data){
    box.innerHTML=''
    data.forEach(element => {
        let conteiner=document.createElement("div")
        conteiner.classList.add("conteiner")
       let avatar=document.createElement("img")
       avatar.src=element.avatar
       avatar.classList.add("avatar")
       let name=document.createElement("h1")
       name.innerHTML=element.name
       let sostav=document.createElement("p")
       sostav.innerHTML=element.sostav
       let price=document.createElement("p")
       price.innerHTML=element.price+" сомон"
       let checkbox=document.createElement("input")
       checkbox.type="checkbox"
       checkbox.checked=element.status
         let divForButton=document.createElement("div")
         divForButton.classList.add(".divForButton")
let deletBtn=document.createElement("button")
deletBtn.classList.add("fa-solid","fa-trash","deletBtn")
let editBtn=document.createElement("button")
editBtn.classList.add("fa-solid","fa-pen-to-square","editBtn")
divForButton.append(deletBtn,editBtn,checkbox)
conteiner.append(avatar,name,sostav,price,divForButton)
        box.appendChild(conteiner)
    });
}
export default get;


// select
let selectTitle=document.querySelector(".selectTitle")
selectTitle.onclick=()=>{
    selectUser(selectTitle.value)
}


// search
let inpSearch=document.querySelector(".inpSearch")
inpSearch.oninput=()=>{
    serchUser(inpSearch.value.trim())
}
