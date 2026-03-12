//Tekrar üzerine Recape Demo:

var members = [
    {email:"glfrkn@gmail.com", password:"furkan123"},
    {eamil:"kerema@gmail.com", password:"keremas165"},
    {email:"yusufk@gmail.com",password:"yusufmlöds5456"}
]

var twits = [
    {email:"glfrkn@gmail.com", message:"Today is better than the other days."},
    {email:"yusufk@gmail.com", message:"We need changes this president."},
    {email:"kerema@gmail.com", message:"Noo wayy ! Thats will be mistakes"}
]


var emiallog  = prompt("What is your email: ")
var passwordlog = prompt("What is your password: ")

function Login(){
    for(var i = 0; i <= members.length; i++){
        if(emiallog == members[i].email && passwordlog == members[i].password){
            console.log(twits)
        }
        else{
            alert("Wrong Information !")
        }
    }
}


function UserControl(emaillog,passwordlog){
    for(i = 0; i <= members.length; i++){
        if(emiallog == members[i].eamil && passwordlog[i].password){
            alert("Correct Login !");
        }
        else{
            alert("Wrong Login Try !");
        }
    }
}
