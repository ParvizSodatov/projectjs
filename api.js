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

export default getData;
export {serchUser,selectUser}