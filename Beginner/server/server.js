var http=require('http');
var url= require('url');

function startServer(router,handle){
    function onStart(request,response){
        var reviewData='';
        request.setEncoding('utf8');
        request.addListener('data',(chunk)=>{
            reviewData+=chunk;
        })
        request.addListener('end',()=>{
            router(handle,pathName,response,reviewData);
        })
        var pathName=url.parse(request.url).pathname;
        console.log('Request Received for '+ pathName);
        
        
    }
    http.createServer(onStart).listen(8888);
    console.log('app is listening at port :8888');
}
exports.startServer=startServer;