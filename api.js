import get from "./dom.js";
let API="http://localhost:3000/data"
async function getData() {
    try {
        let {data}=await axios.get(API)
          get(data)
          console.log(data);
    } catch (error) {
        console.log(error);
    }
}
export default getData