const mailer = require("nodemailer");

let transport = mailer.createTransport({
    service:"gmail",
    auth:{
        user:"sarafniraj6165@gmail.com",
        pass:""
    }

})

let message = {
    from : "sarafniraj6165@gmail.com",
    to:"nirajsaraf6165@gmail.com",
    subject :"Email using NODE JS",
    text:"this mail is send using node js"
}

transport.sendMail(message,(error,info)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Email send");
        console.log(info.response);
    }
});