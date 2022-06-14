const file =require('fs');
const zlib= require('zlib');
//const gzip= zlib.createGzip();
const gzip= zlib.createGunzip();
//const rstream= file.createReadStream("Node2/NodeFile1.txt","utf-8");
//const wstream= file.createWriteStream("Node/NodeFile1.txt.gz");


const rstream= file.createReadStream("Node/NodeFile1.txt.gz");
const wstream= file.createWriteStream("Node/NodeFile2.txt");

rstream.pipe(gzip).pipe(wstream);