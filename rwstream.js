const rws= require('fs');

const rstream=  rws.createReadStream("Node2/NodeFile1.txt","utf-8");
const wstream= rws.createWriteStream("Node/NodeFile1.txt");

rstream.on('data',(chunk)=>{
        wstream.write(chunk);
});
