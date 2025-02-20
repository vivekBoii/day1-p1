const fs = require('fs')

fs.mkdir("mydir",(err)=>{
    if(err) console.log(err);
    else console.log("directory created");
})

const data="Vivek Kumar";
fs.writeFileSync("./mydir/data.txt",data);