const fs = require('fs')

fs.mkdir("mydir",(err)=>{
    if(err) console.log(err);
    else console.log("directory created");
})

const data="Vivek Kumar";
fs.writeFileSync("./mydir/data.txt",data);

fs.unlink("./mydir/data.txt",(err)=>{
    if(err)
        console.log(err)
    else
        console.log('file deleted')
})

fs.rmdir("mydir",(err)=>{
    if(err)
        console.log(err)
    else
        console.log('folder deleted')
})