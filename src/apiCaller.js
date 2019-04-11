

const domain = 'https://www.gita.network/api'




export default (method,port,headers,endpoint,body)=>{
    let url=`${domain}/${endpoint}`;    
    if(method==="POST"){
        const options = {
            method: method,
            headers:
            {
                ...headers,
                "Content-Type": 'application/x-www-form-urlencoded'
            },
            body: body,

        };
        console.log(options)
        return fetch(url,options);
    }
    else{
        url =  `${url}?`;
        let parameter;
        for (parameter in body){
            console.log(parameter)
            url = `${url}${parameter}=${body[parameter]}&`
        }
        return fetch(url);
    }
}