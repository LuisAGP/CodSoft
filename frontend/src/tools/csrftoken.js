import {urlBase} from './app.js'
// /**
//  * Function for get the CSRF Token from Django 
//  * @author Django
//  * @param {String} name cache name
//  * @return {String}
//  */
// export function getCSRF(name="csrftoken") {
//     let cookieValue = null;
//     if (document.cookie && document.cookie !== '') {
//         const cookies = document.cookie.split(';');
//         for (let i = 0; i < cookies.length; i++) {
//             const cookie = cookies[i].trim();
//             // Does this cookie string begin with the name we want?
//             if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                 break;
//             }
//         }
//     }
//     return cookieValue;
// }



/**
 * Function to get the Django's CSRFToken
 * @author Luis GP
 * @returns {String}
 */
export async function getCSRF(){
    try{

        return fetch(`${urlBase}getCSRFToken/`, {
            credentials: 'include',
        })
        .then(response => response.json())
        .then(data => {
            return data.csrftoken
        })
        .catch(err => console.log(err));

    }catch(error){
        console.log(error);
        return null;
    }
}
