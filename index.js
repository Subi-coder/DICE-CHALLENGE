first();
function first(){
    var n = prompt("Please enter your player 1 name!");
    document.querySelector("p.player1").innerHTML=n;
    if (n==null){
      document.querySelector("p.player1").innerHTML="Player1";
    }
    else if(n.length==0){
      document.querySelector("p.player1").innerHTML="Player1";
    }
 }
function buttonClick(){
    var randomNumber1=Math.floor(Math.random()*6+1);
     var n1=randomNumber1;
     if(n1===1){
            document.querySelector("div .image1").setAttribute("src","./images/dice1.png");
        }
     else if(n1===2){ 
            document.querySelector("div .image1").setAttribute("src","./images/dice2.png");
        }
     else if(n1===3){
            document.querySelector("div .image1").setAttribute("src","./images/dice3.png");
       }
     else if(n1===4){
            document.querySelector("div .image1").setAttribute("src","./images/dice4.png");
       }
    else if(n1===5){
            document.querySelector("div .image1").setAttribute("src","./images/dice5.png");
       } 
     else if(n1===6){
            document.querySelector("div .image1").setAttribute("src","./images/dice6.png");
       }
     else{
            document.querySelector("div .image1").setAttribute("src","./images/dice6.png");
       }

   
 //<-------------SPACE---------------->


 //player2 random image generator

  var randomNumber2=Math.floor(Math.random()*6+1);
  var n2=randomNumber2;
    if(n2===1){
        document.querySelector("div .image2").setAttribute("src","./images/dice1.png");
      }
      else if(n2===2){
        document.querySelector("div .image2").setAttribute("src","./images/dice2.png");
      }
      else if(n2===3){
        document.querySelector("div .image2").setAttribute("src","./images/dice3.png");
      }
      else if(n2===4){
        document.querySelector("div .image2").setAttribute("src","./images/dice4.png");
       }
      else if(n2===5){
        document.querySelector("div .image2").setAttribute("src","./images/dice5.png");
      }
      else if(n2===6){
        document.querySelector("div .image2").setAttribute("src","./images/dice6.png");
      }
       else{
        document.querySelector("div .image2").setAttribute("src","./images/dice6.png");
      }


 //<------------SPACE------------->

 //difference between values and showing the answer as "winner" or "draw!""

    if(n1>n2){
      document.querySelector("h1").innerHTML="🚩You won !!"; 
      document.querySelector("h1").style.color="yellow";
    }
    else if(n1<n2){
      document.querySelector("h1").innerHTML="🖥️ won !🚩";
      document.querySelector("h1").style.color="#4ECCA3";    
    }
    else if(n1==n2){
     document.querySelector("h1").innerHTML="🎌 Draw! 🎌";
     document.querySelector("h1").style.color="#4ECCA3";
    }
}


 //calling the onclick event

 document.getElementById("myBtn").addEventListener("click", buttonClick);


 //Hover effect on Roll Dice

 function bigImg(x) {
    x.style.height = "74px";
    x.style.width = "164px";
  }
  
  function normalImg(x) {
    x.style.height = "50px";
    x.style.width = "150px";
  }
