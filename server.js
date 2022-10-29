const path = require('path');
const fs = require('fs');
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    let fileroutes = path.join(__dirname, 'routes', req.url === '/'? 'index.html': req.url);
    res.writeHead(200, { 'Content-Type': 'text/html'});
    fs.readFile(fileroutes, 'utf8', (error, data) =>{
        if(error) {
            res.writeHead('404')
            res.write('Error: File Not Found')
        }else{
            res.write(data)
        }
    })
})
server.listen(PORT, (error)=> {
    if(error){
        console.log('Something went wrong', error)
    }else{
        console.log(`Server running at http://localhost:${PORT}`)
    }
});