# Projects relatd to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1
```HTML
<!-- html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>JavaScript Background Color Switcher</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="canvas">
      <!-- <a
        style="
          background-color: #fff;
          padding: 10px 30px;
          border-radius: 8px;
          color: #212121;
          text-decoration: none;
          border: 2px solid #212121;
        "
        href="../index.html"
        >Back to Home Page</a
      > -->
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script src="p1.js"></script>
    <style>
            html {
        margin: 0;
        }

        span {
        display: block;
        }
        .canvas {
            border: 5px solid black;
        margin: 100px auto 100px;
        width: 80%;
        text-align: center;
        }

        .button {
        width: 100px;
        height: 100px;
        border: solid black 2px;
        display: inline-block;
        margin: 10px;
        }

        #grey {
        background: grey;
        }

        #white {
        background: white;
        }
        #blue {
        background: blue;
        }
        #yellow {
        background: yellow;
        }


</style>
  </body>
</html>

```
```javascript
//javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
console.log(buttons);//NodeList(4) [span#grey.button, span#white.button, span#blue.button, span#yellow.button]
console.log(body);
buttons.forEach((b)=>{
    b.addEventListener('click',(e)=>{
        //if clicked on grey
        // console.log(e); // PointerEvent {isTrusted: true, pointerId: 3, width: 1, height: 1, pressure: 0, …}
        // console.log(e.target); // <span class="button" id="grey"></span>
        //now
        const output=e.target.id;
        switch (output) {
            case "grey":
                body.style.backgroundColor="grey";
                break;
             case "white":
                body.style.backgroundColor="white";
                break;
            case "blue":
                body.style.backgroundColor="blue";
                break;
            case "yellow":
                body.style.backgroundColor="yellow";                
                break;
        }
    })
})

```

## project 2

```HTML
<!-- html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="p1.js" defer></script>
    <title>BMI calculator</title>
</head>
<body>
    <nav style="background-color: rgb(21, 163, 224); border: 2px solid black;display: flex;">
        <ul style="display: flex; gap: 20px;">
            <li><a href="#">Home</a></li>
            <li><a href="#">goto problem</a></li>
            <li><a href="#">comment</a></li>
        </ul>
    </nav>
    <h1>This is an advanced BMI Generator</h1>
    <div class="canvas">
        <h2>BMI CALCULATOR</h2>
        <form action="">
        <label for="height">Height (in cm):</label>
        <input type="number" id="height" placeholder="e.g. 170">

        <br><br><br>

        <label for="weight">Weight (in kg):</label>
        <input type="number" id="weight" placeholder="e.g. 65">

        <br><br>

        <button id="calcBtn" type="submit" style="background-color: cornflowerblue;">Calculate BMI</button>
        <p id="result"></p>
        </form>
    </div>
    <style>
        body{
            background-color: gray;
        }
        .canvas{
            padding: 20px;
            display: inline-block;
            border: 5px solid black;
        }
    </style>
</body>
</html>
```

```javascript
/*
javascript
BMI= ​weight(kg)/pow(height(cm),2);
*/
const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    if(height=='' || height<0 || isNaN(height)){
        result.innerHTML=`please give a valid height :${height}`;
    }
    else if(weight=='' || weight<0 || isNaN(weight)){
        result.innerHTML=`please give a valid height :${weight}`;
    }
    else{
        const bmi=(weight/(height*height/10000)).toFixed(2);
        // now lets write condition which will tell weight catogary

        let category = "";

        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = "Normal weight";
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = "Overweight";
        } else {
            category = "Obese";
        }

        result.innerHTML = `Your BMI is <span>${bmi}</span> and you are <strong>${category}</strong>`;
    }
})


```

## project 3
```HTML
      <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" type="text/css" href="../styles.css" />
    <title>Your Local Time</title>
    <style>
      body {
        background-color: #212121;
        color: #fff;
      }
      .center {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      #clock {
        font-size: 40px;
        background-color: orange;
        padding: 20px 50px;
        margin-top: 10px;
        border-radius: 10px;
      }
    </style>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="center">
      <div id="banner"><span>Your local time</span></div>
      <div id="clock"></div>
    </div>
    <script src="p1.js"></script>
  </body>
</html>

```

```javascript

      //js
const clock=document.querySelector('#clock');
setInterval(()=>{
    let date = new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000);

```

## project 4 disco
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title></title>
</head>
<body>
  <div class="intro">
  <h1 style="color: blue; font-family: Arial, Helvetica, sans-serif;">Hello there I am Utkarsh</h1>
  <img src="myphoto.jpg" alt="photo" id="myphoto" style="width: 120px;height: 120px;">
  </div>
  <br><br>
  <button id="start" style="border-radius: 5px; background-color: aquamarine;padding: 5px; border: 2px solid black ; text-shadow: tomato; width: 100px;">start</button>
  <button id="stop" style="border-radius: 5px; background-color: blanchedalmond;padding: 5px; border: 2px solid black ; text-shadow: tomato; width: 100px;">stop</button>
  <button id="show" style="border-radius: 5px; background-color: aquamarine;padding: 5px; border: 2px solid black ; text-shadow: tomato; width: 100px;">show</button>
  <button id="dicolight" style="border-radius: 5px; background-color: aquamarine; padding: 5px; border: 2px solid black ; text-shadow: tomato; width: 100px;">Disco</button>
  <script src="p1.js"></script>
  <style>
    h1{
      border-radius: 10%;
    }
    .intro{
      display: flex;
    }
    #myphoto {
      visibility:hidden;
    }
  </style>
</body>
</html>
```
```javascript
// 1

// setTimeout(function(){
//     console.log('hitesh');// it will be printer after 2 sec in console log
// },2000)

//also
// const say = function(){
//     console.log('hitesh');
// }
// setInterval(say,2000);// it will also print hitesh after 2 sec



//2
// const changetext=function(){
//     document.querySelector('h1').innerHTML='i got changed';
// }
// setTimeout(changetext,5000); // after 5 sec it got changed


//3 
//suppose you wanna remove the setTimeout
const changetext=function(){
     document.querySelector('h1').innerHTML='i got changed';
 }
 const timeout1=setTimeout(changetext,5000); // after 5 sec it got changed
document.querySelector('#stop').addEventListener('click',()=>{
    clearTimeout(timeout1); // if u do this and when u click on stop button it will stop chaning the name as given in timeout
})
const img = document.querySelector('#myphoto');
document.querySelector('#show').addEventListener('click',()=>{
    img.style.transform = "translateX(-200px)";
    document.querySelector('h1').style.visibility="hidden";
    img.style.visibility="visible";
})
document.querySelector('#dicolight').addEventListener('click',()=>{
    const x = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    };
        const y = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        document.querySelector('h1').style.color = `rgb(${r}, ${g}, ${b})`;
    };
        setInterval(x,1000);
        document.querySelector('h1').style.backgroundColor="white";
        setInterval(y,1000);
})
```

## Project 5
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>project 5</title>
</head>
<body style="background-color: black">
  <div class="container" style="background-color: white; height: 20vh;width: 100vw;">
    <h1>PRESS ANY KEY AND SEE THE MAGIC</h1>
  </div>
  <div class="insert" style="background-color: yellow; margin: auto; display: flex; align-items: center;justify-content: center;">
    <div class="key" style="color: white;">Hello i am here for you just press me</div>
  </div>
<script src="p1.js"></script>
</body>
</html>
```
```JAVASCRIPT
const insert= document.querySelector('.insert');
window.addEventListener('keydown',(e)=>{
    insert.innerHTML=`
    <div class="color">
    <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' '?'space':e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div>
    `
})
```