//variables
let whiskeyButton = document.getElementById("whiskey");
let inventory = document.getElementsByClassName("inventory");
let whiskeyText = document.getElementById("whiskeyinventory");
let bagText = document.getElementById("baginventory");
let flashlightText = document.getElementById("flashlightinventory");
let story = document.getElementById("story");
let flash = document.getElementById("flash");
let bagPic = document.getElementById("bag");
let rollDice = document.getElementById("dices")

//whiskey button

whiskeyButton.addEventListener('click', function(){
    whiskeyText.innerText=("1x");
    story.innerHTML=("The cowboy says that the abandoned saloon might be one of the hideouts for the thieves. He gives you a flashlight.");
    flash.style.visibility="visible";
    whiskeyButton.style.visibility="hidden";
})

//flash button

flash.addEventListener('click', function(){
    flashlightText.innerText=("1x");    
    flash.remove();
    bagPic.style.visibility="visible";

}) 

//bag button
bagPic.addEventListener('click', function(){
    bagText.innerText=("1x");
    bagPic.style.visibility="hidden";
    rollDice.style.visibility="visible";
    story.innerHTML=("Great! you found the bag! But who is that? It's one of the thieves and he challenges you in a round of dice for the bag. Roll the dice!")
})

//DICE

let myDices = Math.floor(Math.random()*6)+1;
let hisDices = Math.floor(Math.random()*6)+1;
    
console.log("yours " + myDices);
console.log("his " + hisDices);

function rolldice(){
let myDices = Math.floor(Math.random()*6)+1;
let hisDices = Math.floor(Math.random()*6)+1;
if(myDices > hisDices){
    console.log("you win!");
    alert("Congrats! You beat the thief with rolling your dice higer then he! You won the game!");
}else if (myDices == hisDices){
    console.log("tie, go again.");
    alert("tie, go again");
}else{
    console.log("you lose!");
    alert("Aw, you lost against the thief, he took your bag and you go home empty handed... The End.");
}}