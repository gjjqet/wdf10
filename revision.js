//Get UI

const minnumber = document.querySelector(".min");
const maxnumber = document.querySelector(".max");
const getinput = document.querySelector(".form-control");
const getbtn = document.querySelector(".btn");
const getmessage1 = document.querySelector(".message1");
const getmessage2 = document.querySelector(".message2");
const gameform = document.querySelector(".gameform");

let min = 1,
    max = 20,
    winningnum = randomnum(max,min),
    left = 3;

    console.log(winningnum);

minnumber.textContent = min;
maxnumber.textContent = max;

getbtn.addEventListener("click",function(e){
    const guess = parseInt(getinput.value);

    if(guess < min || guess > max || isNaN(guess)){
        getmessage2.textContent = "You should guess between 1 to 20";
        getmessage2.style.color = "black";

        setTimeout(function(){
            getmessage2.textContent = "";
        },2000);
    }

    if(guess === winningnum){

        getmessage1.textContent = `Con Con you are right!! correct number is ${guess}`;
        getmessage1.style.color = "green";

        getinput.disabled = true;

        getbtn.value = "Play Again";

        getbtn.classList.add("playagain");



    }else{
        left -= 1;

        if(left === 0){
            getmessage1.textContent = `Game over!! correct number is ${winningnum}`;
            getinput.disabled = true;
            getbtn.value = "Play Again";

            getbtn.classList.add("playagain");

        }else{
            getmessage1.textContent = `You are wrong!! correct number is not ${guess} . You left ${left} guess`;
            getmessage1.style.color = "red";
        }
    }

    getinput.value = "";
    getinput.focus();

    e.preventDefault();
});


gameform.addEventListener("mousedown",function(e){

    if(e.target.classList.contains("playagain")){
        window.location.reload();
    }

})

function randomnum(min,max){

   const win = Math.floor( Math.random()* (max - min)+min);
   return win;

}