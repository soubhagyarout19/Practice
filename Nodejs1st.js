// let os = require("os");
// console.log(os.hostname());
// console.log(os.cpus().length);
// console.log(os.freemem());
// console.log(os.arch());

// let path = require("path");
// console.log(path.dirname("c:\Users\soubhagya rout\Desktop\Practice\Nodejs1st.js"));

// console.log(__dirname);
// console.log(__filename);

// const fs = require("fs");
// // console.log(fs.readFileSync("./Pyramid.html","utf-8"));
// let x = fs.readFile("./Pyramid.html","utf-8",(err,data)=>{
//     // try{
//     //     console.log(data);
//     // }catch{
//     //     console.log(err);
//     // }
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// });


let fs = require("fs");
fs.writeFileSync("./sdrnodejs.js","file created","utf-8");
