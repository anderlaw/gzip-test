const http = require('http');
const url = require('url')
const path = require('path')
const fs = require('fs')
const zlib = require('zlib');
const server = http.createServer((req,res)=>{
    //创建可读流
    let rs = fs.createReadStream(path.join(__dirname,'index.html'));
    res.setHeader("Content-Encoding", 'gzip');
    let compress = zlib.createGzip();
    rs.pipe(compress).pipe(res);

})
function unzip(){
    let 
}
server.listen(8888)