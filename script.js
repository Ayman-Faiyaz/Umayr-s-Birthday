const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
      document.querySelector(".next-line").style.display = "block";
      document.querySelector(".next-line").style.animation = "show-next-line 1s forwards";
    }
    
    iteration += 1 / 3;
  }, 30);
}

function handleButtonClick(targetElement) {
  targetElement.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('go').addEventListener('click', function() {
  handleButtonClick(document.querySelector("h1[data-value='AN ILLEGAL TEEN!']"));
});

document.getElementById('go1').addEventListener('click', function() {
  handleButtonClick(document.querySelector("h1[data-value='ANYWAYS...']"));
});

document.getElementById('go2').addEventListener('click', function() {
  handleButtonClick(document.querySelector("h1[data-value='DO YOU WANT TO KNOW ABOUT YOUR GIFT?']"));
});

document.getElementById('go3').addEventListener('click', function() {
  handleButtonClick(document.querySelector("h1[data-value='WELL THEN GIFT NUMBER 1...']"));
});

document.getElementById('go4').addEventListener('click', function() {
  handleButtonClick(document.querySelector("h1[data-value='THERE IS A SECRET LINK IN THIS WEBSITE!']"));
});

document.getElementById('go5').addEventListener('click', function() {
  handleButtonClick(document.querySelector("h1[data-value='WHICH CAN LEAD YOU TO SOMETHING AMAZING!']"));
});

document.getElementById('go6').addEventListener('click', function() {
  handleButtonClick(document.querySelector("h1[data-value='BUT YOU HAVE TO FIND IT YOURSELF...']"));
});

document.getElementById('go7').addEventListener('click', function() {
  handleButtonClick(document.querySelector("h1[data-value='NOW GIFT NUMBER 2!']"));
});

document.getElementById('go8').addEventListener('click', function() {
  handleButtonClick(document.querySelector("h1[data-value='A VIDEO LINK!']"));
});

document.getElementById('go9').addEventListener('click', function() {
  handleButtonClick(document.querySelector("h1[data-value='BEFORE YOU CLICK!']"));
});

document.getElementById('go10').addEventListener('click', function() {
  handleButtonClick(document.querySelector("h1[data-value='THIS IS NOT A RICKROLL']"));
});

document.getElementById('go11').addEventListener('click', function() {
  handleButtonClick(document.querySelector("h1[data-value='SO STAY ASSURED!']"));
});

document.getElementById('go12').addEventListener('click', function() {
  handleButtonClick(document.querySelector("h1[data-value='LINK']"));
});

document.getElementById('go13').addEventListener('click', function() {
  handleButtonClick(document.querySelector("h1[data-value='NOW PRESENTING GIFT NUMBER 3!']"));
});

document.getElementById('go14').addEventListener('click', function() {
  handleButtonClick(document.querySelector("h1[data-value='A VIDEO!']"));
});

document.getElementById('go15').addEventListener('click', function() {
  handleButtonClick(document.querySelector("h1[data-value='I SWEAR IN THE NAME OF ALLAH']"));
});

document.getElementById('go16').addEventListener('click', function() {
  handleButtonClick(document.querySelector("h1[data-value='THAT THIS IS A NORMAL VIDEO!']"));
});

document.getElementById('go17').addEventListener('click', function() {
  handleButtonClick(document.querySelector("h1[data-value='NORMAL LINK']"));
});

document.getElementById('go18').addEventListener('click', function() {
  handleButtonClick(document.querySelector("h1[data-value='GIFT NUMBER 4 NOW!']"));
});

document.getElementById('go19').addEventListener('click', function() {
  handleButtonClick(document.querySelector("h1[data-value='GET INVITED FOR FOOTBALL']"));
});

document.getElementById('go20').addEventListener('click', function() {
  handleButtonClick(document.querySelector("h1[data-value='WELL ALREADY DID...']"));
});

document.getElementById('go21').addEventListener('click', function() {
  handleButtonClick(document.querySelector("h1[data-value='SO...']"));
});