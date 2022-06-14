const file=require('fs');

/*
file.mkdir("Node",(err)=>{
    if(err)
        console.log(err);
    else
        console.log("Folder created successfully!");
});
*/

/*
file.rmdir("Node",(err)=>{
    if(err)
        console.log(err);
    else
        console.log("Folder deleted successfully!");
});
*/
/*
file.mkdir("Node",(err)=>{
    if(err)
        console.log(err);
    else{
            file.writeFile("Node/NodeFile1.txt","Welcome to the world of Node.js",(err)=>{
                if(err)
                    console.log(err);
                else{
                        file.readFile("Node/NodeFile1.txt","utf-8",(err,data)=>{
                            if(err)
                                console.log(err);
                            else
                                console.log(data);
                        });
                }
            });
    }
});
*/

file.readdir("Node",(err,files)=>{
    if(err)
        console.log(err);
    else
        for( let leep of files)
        {
            file.unlink("Node/"+leep,(err)=>{
                if(err)
                    console.log(err);
                else
                    console.log("File deleted successfully");
            });
        }
});
