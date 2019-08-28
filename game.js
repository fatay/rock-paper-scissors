let choise = ["rock.png","paper.png","scissors.png"];

let selected = "rock";

let ro = document.getElementById("rock");
let pa = document.getElementById("paper");
let sc = document.getElementById("scissor");

document.getElementById("myBtn").addEventListener("click", displayMe);
ro.addEventListener("click", rocky);
pa.addEventListener("click", papery);
sc.addEventListener("click", scissory);

function rocky(){
  console.log("rock");
  ro.classList.add("active");
  selected = "rock";

  pa.classList.remove("active");
  sc.classList.remove("active");
}

function papery(){
  console.log("paper");
  pa.classList.add("active");
  selected = "paper";

  ro.classList.remove("active");
  sc.classList.remove("active");
}

function scissory(){
  console.log("scissor");
  sc.classList.add("active");
  selected = "scissor";
  
  ro.classList.remove("active");
  pa.classList.remove("active");
}


var go; 
function displayMe(){
  go = setInterval(gonow, 75);
}

let x = 0;
function gonow(){
    let num = Math.floor(Math.random() * 3); 
    let e = choise[num];
    document.getElementById("selector").src = e;
    console.log(x);
    if(x==12){
      
      clearInterval(go); x=0; 
      let computer = e.charAt(0);
      let user = selected.charAt(0);
      const a = document.getElementById('sonuc');

        //rock paper scissors
      if(computer == user){
        a.innerText = "BERABERE";
      }else if(computer=='r' && user == 's'){
        a.innerHTML = "KAYBETTİNİZ";
      }else if(computer=='p' && user == 'r'){
        a.innerHTML = "KAYBETTİNİZ";
      }else if(computer=='s' && user == 'p'){
        a.innerHTML = "KAYBETTİNİZ";
      }else{
        a.innerHTML = "KAZANDINIZ";
      }

    }
    x++;
}


function sonuc(){}

function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
 }
}