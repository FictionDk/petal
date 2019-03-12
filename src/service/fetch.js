import {
    baseUrl
} from './env'

export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
    type = type.toUpperCase();
    url = baseUrl + url;
    console.log('URL:'+url)
    if(type == 'GET'){
        let dataStr = '';
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        })
    }

    var token = window.sessionStorage.getItem("token")

    let requestConfig = {
        method: type,
        headers: {
            "Accept": "application/json",
            'Content-Type': "application/json",
            'token': token
        }
    }

    console.log('data:'+JSON.stringify(data))

    if(type == 'POST'){
        Object.defineProperty(requestConfig, 'body', {
            value: JSON.stringify(data)
        })
    }

    try{
        const response = await fetch(url,requestConfig);
        const responseJson = await response.json();
        return responseJson
    }catch (error){
        throw new Error(error)
    }
}