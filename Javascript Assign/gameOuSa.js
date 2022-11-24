let whiskeyButton = document.getElementById("whiskey");
let inventory = document.getElementsByClassName("inventory");
let whiskeyText = document.getElementById("whiskeyinventory");
let bagText = document.getElementById("baginventory");
let flashlightText = document.getElementById("flashlightinventory");
let story = document.getElementById("story");
let flash = document.getElementById("flash");
let bagPic = document.getElementById("bag");
let rollDice = document.getElementById("dices");

if(sessionStorage.getItem("afterWhiskey") !=null){
    whiskeyText.innerText=("1x");
    story.innerHTML=("The cowboy says that the abandoned saloon might be one of the hideouts for the thieves. He gives you a flashlight to be able to see inside of the building.");
}

if(sessionStorage.getItem("afterFlash")!=null){
    flashlightText.innerText=("1x");
}

