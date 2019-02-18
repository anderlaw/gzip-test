const zlib = require('zlib');
const fs = require('fs')
const path = require('path')
//可读流
const rs = fs.createReadStream(path.join(__dirname,'index.html'));
//可写流
const ws = fs.createWriteStream(path.join(__dirname,'index.html.gz'));
const compress = zlib.createGzip()
rs.pipe(compress).pipe(ws);