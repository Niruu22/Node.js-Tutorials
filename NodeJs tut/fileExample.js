const fs = require("fs");

//readFile

// fs.readFile("./abc.txt" , (error,data)=>{

//     if(error){
//         console.log("Error");
//         console.log(error);
//     }else{
//         console.log(data.toString());
//     }

// }); 

// console.log("Continue");


//WriteFile
// let content = "Wow this is dyanamic content"
// fs.writeFile("newFile.txt", content, (err) =>{
//      if(err){
//          console.log(err);
//      }else{
//          console.log("Saved");
//      }
// });


//append file 
// this is use for exiting file 

// fs.appendFile("./newFile.txt" , " for Nodejs" , (err) =>{
//     if(err){
//         console.log("error" + err);
//     }else{
//         console.log("Saved");
//     }
// });



/// deleteFile

fs.unlink("./mul.py",(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Deleted");
    }
});