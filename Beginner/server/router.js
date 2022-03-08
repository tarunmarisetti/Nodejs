function router(handle,pathName,response,reviewData){
    console.log("Routing a request for "+pathName);
    if(typeof handle[pathName]==='function'){
        handle[pathName](response,reviewData);
    }else{
        console.log('no handler for '+pathName);
    }
}
exports.router=router;