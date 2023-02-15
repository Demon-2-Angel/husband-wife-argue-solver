var num1 = Math.floor(Math.random() * 6) + 1;

//we have selected the folder name and taken the random number 
//generated by the random function of Js
var diceImage = "images/" + "dice" + num1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", diceImage);

//now, for image2
var num2 = Math.floor(Math.random() * 6) + 1;
var diceImage = "images/" + "dice" + num2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", diceImage);

//changing heading
if (num1 > num2) {
    document.querySelector("h1").innerHTML = "🎉 Winner is Player1 ! 🎉";
}

else if (num1 === num2) {
    document.querySelector("h1").innerHTML = "🙌 It's a Draw ! 🙌";
}

else { document.querySelector("h1").innerHTML = "🎉 Winner is Player2 ! 🎉"; }
