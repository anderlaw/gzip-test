const zlib = require('zlib');
const fs = require('fs')
const path = require('path')
const rs = fs.createReadStream(path.join(__dirname,'index.html.gz'));
const randomTag = new Date().getTime();
const ws = fs.createWriteStream(path.join(__dirname,`${randomTag}index.html`));
const unCompress = zlib.createGunzip();
rs.pipe(unCompress).pipe(ws);