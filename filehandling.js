const file= require('fs');


file.writeFile("Node/NodeFile1.txt","This is my first file created by Node.Js",(err)=>{
    if(err) 
        console.log(err);
    else{  
        console.log("Congratulations!! File created successfully!");
        file.readFile("Node/NodeFile1.txt","utf-8",(err,data)=>{
            if(err)
                console.log(err);
            else
                console.log(data);
            
        });
    }
});


/*
file.appendFile("newfile1.txt","This is new content",(err)=>{
    if(err)
    console.log(err);
    else
    console.log("File content changed successfully!");
});
*/

/*
file.rename("newfile1.txt","File1.txt",(err)=>{
    if(err)
        console.log(err);
    else
        console.log("File renamed succesfully!");
});
*/
/*
file.unlink("NodeFile1.txt",(err)=>{
    if(err)
        console.log(err);
    else
        console.log("File deleted successfully!");
});
*/
