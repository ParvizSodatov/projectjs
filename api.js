import get from "./dom.js";

let API="http://localhost:3000/data"
async function getData() {
    try {
        let {data}=await axios.get(API)
        get(data)
    } catch (error) {
        console.log(error);
        
    }
}

 async function selectUser(value) {
    try {
        let {data}=await axios.get(`${API}?title=${value}`)
        get(data)
    } catch (error) {
        console.log(error);
        
    }
 }
async function serchUser(value) {
    try {
        let {data}=await axios.get(`${API}?name=${value}`)
        get(data)
    } catch (error) {
        console.log(error);  
    }
}


// delete
async function deletUser(id) {
    try {
        let {data}=await axios.delete(`${API}/${id}`)
        getData()
    } catch (error) {
        console.log(error);
        
    }
}
async function editUser(user) {
 try {
   let {data}=await axios.put(`${API}/${user.id}`,user)
   getData()
 } catch (error) {
    console.log(error);
    
 }
}


// add
async function add(user) {
    try {
        let {data}=await axios.post(API,user)
        getData()
    } catch (error) {
        console.log(error);
        

    }
}

export default getData;
export {serchUser,selectUser,deletUser,editUser,add}