// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }



const http = require("http");
const url = require("url");
const fs = require("fs")
const port = 3000;



const server =http.createServer(function(req,res){
    const parsedURL =url.parse(req.url,true);
    console.log(parsedURL);
    res.setHeader("content-type","text/html");
    switch(parsedURL.pathname) {
        case "/about": {
            // res.write("<h1>About page</h1>");
            const data =fs.readFileSync(".lpages/about.html",{encoding:"utf8"})
            res.write(data)
        }
        break;
        case "/": {
            // res.write("<h1>Home page</h1>")
            const data = fs.readFileSync("./pages/contact.html",{encoding:"utf8"})
        }
        break;
        case "/contact":{
            // res.write("<h1> Contact pagee</h1>");
            const data =fs.readFileSync("./pages/home.html",{encoding:"utf8"})
        }
        break;
        default: {
            res.write("<h1>page not found")
        }
    }
    res.end()
    

});

server.listen(port,error => {
    if(error) {
        return console.log(error);
    }
    console.log(`server started on part ${port}`);
})
   