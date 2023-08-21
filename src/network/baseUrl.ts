
const getBaseUrl = ()=>{
    // 开发环境
    let BASE_URL = 'http://localhost:3001';
    if(process.env.NODE_ENV==='production'){
        // 生产环境-根据请求不同返回不同的BASE_URL
        BASE_URL='http://localhost:3001';
    }
    return BASE_URL;
}

export default getBaseUrl;