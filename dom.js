let box=document.querySelector(".box")
// import { selectUser } from "./api.js";
import { serchUser,selectUser,deletUser,editUser,add } from "./api.js";

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
deletBtn.onclick=()=>{
    deletUser(element.id)
}
deletBtn.classList.add("fa-solid","fa-trash","deletBtn")
let editBtn=document.createElement("button")
editBtn.classList.add("fa-solid","fa-pen-to-square","editBtn")
editBtn.onclick=()=>{
    openEditUser(element)
}
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

let dialogForEdit=document.querySelector(".dialogForEdit")
let formEdit=document.querySelector(".formEdit")
let idx=null;
// edit
function openEditUser(user) {
    dialogForEdit.showModal()
    idx=user.id
    formEdit["avatar"].value=user.avatar  
    formEdit["name"].value=user.name
    formEdit["sostav"].value=user.sostav
    formEdit["selectStatus"].value=user.status
    formEdit["price"].value=user.sostav

}
formEdit.onsubmit=(e)=>{
e.preventDefault()
let newEditUser={
    id:idx,
    avatar:formEdit["avatar"].value,
    name:formEdit["name"].value,
    sostav: formEdit["sostav"].value,
    price:formEdit["price"].value,
    status:formEdit["selectStatus"].value=="true"?true:false
}
editUser(newEditUser)
}

let addNewProduct=document.querySelector(".addNewProduct")
let dialogForAdd=document.querySelector(".dialogForAdd")
let formAdd=document.querySelector(".formAdd")
addNewProduct.onclick=()=>{
    dialogForAdd.showModal()

}

formAdd.onsubmit=(e)=>{
    e.preventDefault()
    let newUser={
        avatar:formAdd["avatar"].value,
        name:formAdd["name"].value,
        sostav:formAdd["sostav"].value,
        price:formAdd["price"].value,
        status:formAdd["selectStatus"].value=="false"?false:true
    }
    add(newUser)
}