//constructor class echma 6

class user{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptpass(){
        return `${this.password}abc`; 
    }
    changeusername(){
        return `${this.username.toUpperCase()}`;
    }
}
const messi = new user("leo messi", "messi@leo","barca2021");
console.log(messi.encryptpass());
console.log(messi.changeusername());
