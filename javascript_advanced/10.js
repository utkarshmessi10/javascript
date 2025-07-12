const xhr= new XMLHttpRequest();
 const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
xhr.open('GET',requestUrl);
// using below function u can track the states it is going through
xhr.onreadystatechange=function(){
    console.log(xhr.readyState);//tell the states
    if(xhr.readyState === 4){
        // console.log(this.responseText);// this 4 is last state when response is got from API , so we just printed the response we got
        // const datarecieved = this.responseText;
        // console.log(datarecieved.followers);  this will give undefined as response generally comes in string not in object
        //first convert response into object
        // for that we will use json.parse
        const datarecieved= JSON.parse(this.responseText);
        console.log(datarecieved.followers); // now it will give followrs count => 44670

    }

}
xhr.send();



// asignment 
//make a card template where user can access the photo and folower count, use