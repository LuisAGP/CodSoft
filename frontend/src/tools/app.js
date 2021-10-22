import loaderGif from '../../static/images/loader.gif'

let buttonLoader;
let url = window.location.toString();

export const urlBase = url.includes('codsoft.lhr.rocks') ? "https://codsoft.lhr.rocks" : "http://localhost:8000"; 

/**
 * Functiion to get csfrtoken from django
 * @author Django
 * @param {String} name 
 * @returns {String}
 */
export const getCookie = (name) => {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}



/**
 * Generic Ajax function
 * @author Luis GP
 * @param JSON 
 * @return JSON
 */
export function fetchData(json){
    try{

        var data;
        if(json.data && json.data instanceof FormData){
            data = json.data;
        }else if(json.data){
            data = new FormData();
            Object.keys(json.data).forEach((key) => {
                data.append(key, json.data[key]);
            });
        }
        

        return fetch(
            `${urlBase}/${json.url}`,
            {
                method: json.method,
                credentials: "include",
                headers: { 'X-CSRFToken': getCookie('csrftoken') },
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
 * @author Luis GP
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




/**
 * Function for change text of button to loader gif
 * @author Luis GP
 * @param {HTML Node} button 
 * @returns {Boolean}
 */
export const setLoader = (button) => {

    buttonLoader = button;
    button.innerHTML = "";
    button.style = `background-image: url(${loaderGif});
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: 1.5rem;`;

    
    return false;

}




/**
 * Function for change loader gif to text for a button
 * @author Luis GP
 * @param {String} value 
 * @returns {Boolean}
 */
export const removeLoader = (value) => {

    if(buttonLoader){
        buttonLoader.innerHTML = value;
        buttonLoader.style = "";
    }

    buttonLoader = null;
    
    return false;
}





/**
 * Function for check if the file is a image
 * @author Luis GP
 * @param {String} value 
 * @returns {Boolean}
 */
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





/**
 * Function to check if the file extention is not supported the app
 * @author Luis GP
 * @param {String} value 
 * @returns {Boolean}
 */
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