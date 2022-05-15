import axios from "axios";

export const data = async (limit = 20) =>{
    return await axios.get(
        `https://jsonplaceholder.typicode.com/photos?_limit=${limit}`
    );
}