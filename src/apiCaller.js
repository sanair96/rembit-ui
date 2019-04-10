

const domain = '127.0.0.1'




export default (method,port,headers,endpoint,body)=>{
    const url=`${domain}:${port}/${endpoint}`;
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