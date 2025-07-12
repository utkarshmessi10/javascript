const insert = document.querySelector('.insert');
const xhrt = new XMLHttpRequest();
const requestUrl = 'https://api.github.com/users/hiteshchoudhary';

xhrt.open('GET', requestUrl);
xhrt.onreadystatechange = function() {
  if (xhrt.readyState === 4 && xhrt.status === 200) {
    const recieved = JSON.parse(this.responseText);
    console.log(recieved);

   let html = `
     <style>
    @keyframes blinkBorder {
      0% { border-color: red; }
      50% { border-color: yellow; }
      100% { border-color: red; }
    }
  </style>
  <div class="photo" style="margin-top:10px; border-radius:20px; display: flex; justify-content: center;">
    <img src="${recieved.avatar_url}" style="width:100px; height:100px; border-radius:50%;" />
  </div>
`;


    for (const key in recieved) {
      if (key !== 'avatar_url') {
        html += `
          <p style=" background-color:red; padding:10px; color:white;">
            ${key.charAt(0).toUpperCase() + key.slice(1)}: ${recieved[key]}
          </p>
        `;
      }
    }

    insert.innerHTML = html;
  }
};

xhrt.send();
