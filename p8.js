const fs = require('fs/promises')

const read=async()=>{
    const data = await fs.readFile("./a.txt","utf-8")
    console.log(data);
}

read();