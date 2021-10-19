import loaderGif from '../../static/images/loader.gif'

let url = window.location.toString();

export const urlBase = url.includes('codsoft.lhr.rocks') ? "https://codsoft.lhr.rocks/" : "http://localhost:8000/"; 


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
            data = new FormData();
            Object.keys(json.data).forEach((key) => {
                data.append(key, json.data[key]);
            });
        }
        

        return fetch(
            urlBase + json.url,
            {
                method: json.method,
                credentials: "include",
                headers: { 'X-CSRFToken': csrftoken },
                body: json.method != "GET" ? data : undefined
            }
        )
        .then(res => res.json())
        .then(response => {
            return response;
        })
        .catch(err => {
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
export const isLogged = async () => {

    try{

        let response = await fetchData({
            url: 'islogged/',
            method: 'GET'
        });

        return await response.code === 1 ? true : false;

    }catch(error){
        return false;
    }

}


let buttonLoader;


export const setLoader = (button) => {

    buttonLoader = button;
    button.innerHTML = "";
    button.style = `background-image: url(${loaderGif});
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: 1.5rem;`;

    
    return false;

}


export const removeLoader = (value) => {

    if(buttonLoader){
        buttonLoader.innerHTML = value;
        buttonLoader.style = "";
    }

    buttonLoader = null;
    
    return false;
}



export const isImage = (value) => {
    let array = [
        'jpg',
        'jpeg',
        'png',
        'gif',
        'svg'
    ];

    return array.includes(value.toLowerCase()) ? true : false;

}


export const isUnknown = (value) => {
    
    let array = [
        'jpg',
        'jpeg',
        'png',
        'gif',
        'svg',
        'pdf',
        'xls',
        'xlsx',
        'doc',
        'docx',
        'ppt',
        'pptx',
        'zip',
        'rar'
    ];

    return array.includes(value.toLowerCase()) ? false : true;

}