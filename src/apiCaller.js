

const domain = 'http://localhost'




export default (method,port,headers,endpoint,body)=>{
    let url=`${domain}:${port}/${endpoint}`;    
    if(method==="POST"){
        const options = {
            method: method,
            headers:
            {
                ...headers,
                "Content-Type": 'application/json'
            },
            body: {
                ...body
            },
            json: true
        };
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