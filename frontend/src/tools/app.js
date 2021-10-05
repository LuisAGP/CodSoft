import { getCSRF } from './csrftoken'

export const urlBase = "https://codsoft.lhr.rocks/"; 
//export const urlBase = "http://localhost:8000/"; 



/**
 * Generic Ajax function
 * @author Luis Godínez
 * @param JSON 
 * @return JSON
 */
export function fetchData(json){
    try{

        var data = "";
        if(json.data && json.data instanceof FormData){
            data = json.data;
        }else if(json.data){
            data = new FormData();
            Object.keys(json.data).forEach((key) => {
                data.append(key, json.data[key]);
            });
        }

        alert(getCSRF());
        

        return fetch(
            urlBase + json.url,
            {
                method: json.method,
                credentials: "include",
                headers: { 'X-CSRFToken': getCSRF() },
                body: json.method != "GET" ? data : undefined
            }
        )
        .then(res => res.json())
        .then(response => {
            return response;
        })
        .catch(err => {
            console.log(err);
            return {code: 500, message: err};
        });

    }catch(error){
        return {code: 500, message:error}
    }

}




/**
 * Function to check if the user is logged
 * @author Luis Godínez
 * @return {Boolean}
 */
export const isLogged = () => {

    try{

        var req = new XMLHttpRequest();
        req.open('GET', urlBase + 'islogged/', false);
        req.send(null);


        if (req.status == 200 && req.readyState == 4){
            let response = JSON.parse(req.responseText);
            return response.code === 1 ? true : false;
        }

        return false;

    }catch(error){
        
        return false;
    }

}