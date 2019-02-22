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

    let requestConfig = {
        method: type,
        headers: {
            "Accept": "application/json",
            'Content-Type': "application/json"
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