import { getCSRF } from './csrftoken'

export const urlBase = "https://codsoft.lhr.rocks/"; 

/**
 * Generic Ajax function
 * @author Luis Godínez
 * @param JSON 
 * @return JSON
 */
export async function fetchData(json){

    var data;
    if(json.data instanceof FormData){
        data = json.data;
    }else{
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
            body: data
        }
    )
    .then(res => res.json())
    .then(data =>{
        return data;
    })
    .catch(err => console.log(err));

}