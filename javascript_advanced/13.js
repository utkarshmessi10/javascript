const user = {
    username : "messi",
    team : "inter miami",
    totalbalondor : 8,
    nickname : "GOAT",
    Signin:true,
    getusersdetails: function(){
        console.log("got user details from database");
        console.log(`username : ${this.username}`);
        console.log(this);//current context
    }
}
// console.log(user.username);
// console.log(user.getusersdetails());

function users(username , logincount , isloggedin){
    this.username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin
    this.greeting=()=>{
        console.log(`welcome ${this.username}`);
    }
    return this;

}
// USE NEW KEYWORDS FOR MULTIPLE NEW INSTANCE OF THE OBJECT
// BELOW IF WE DONT WRITE NEW IN USERONE AND USERTWO , THE VALUE IN USERONE WILL BE OVERWRITTEN BY USERTWO
const userone = new users("utkarsh",12 , false);
const usertwo = new users("neymar",19 , true);
console.log(userone.constructor);//[Function: users] refrence to itself
console.log(usertwo);
