import { getCSRF } from './csrftoken'

//export const urlBase = "https://codsoft.lhr.rocks/"; 
export const urlBase = "http://localhost:8000/"; 



/**
 * Generic Ajax function
 * @author Luis Godínez
 * @param JSON 
 * @return JSON
 */
export async function fetchData(json){
    try{

        var data = "";
        if(json.data && json.data instanceof FormData){
            data = json.data;
        }else if(json.data){
            console.log
            data = new FormData();
            Object.keys(json.data).forEach((key) => {
                data.append(key, json.data[key]);
            });
        }
        

        return await fetch(
            urlBase + json.url,
            {
                method: json.method,
                credentials: "include",
                headers: { 'X-CSRFToken': getCSRF() },
                body: json.method != "GET" ? data : undefined
            }
        )
        .then(res => res.json())
        .then(data =>{
            return data;
        })
        .catch(err => {
            console.log(err);
            return false;
        });

    }catch(error){
        return {code: 500, message:"Something get wrong!"}
    }

}




/**
 * Function to check if the user is logged
 * @author Luis Godínez
 * @return {Boolean}
 */
export const isLogged = async () => {

    try{

        let response = await fetchData({
            url: 'islogged/',
            method: 'GET',
        });

        return response.code === 1 ? true : false;

    }catch(error){
        return false;
    }

}