const { report } = require('process');
var querystring=require('querystring');

function home(response){
    console.log("Executing 'home' handler");
    var htmlfile= '<html>'+
    '<head>'+
    '</head>'+
    '<body>'+
    '<h1> Enter the Text </h1></br>'+
    '<form action ="/review" method ="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit Text" />'+
    '</form>'+
    '</body>'+
    '</html>';
    response.writeHead('200',{"Context-Type":'text/html'});
        response.write(htmlfile);
        response.end();
}
function review(response,reviewData){
    response.writeHead('200',{"Context-Type":'text/plain'});
    response.write("Your review : "+querystring.parse(reviewData).text);
    response.end();
    console.log("Exceuting 'review' handler");
}
exports.home=home;
exports.review=review;