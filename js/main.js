// start

var Info = prompt("Hello.At the momonet you have 5000$. Are you continue?");
alert(Info);

var Ticket = prompt("The cost ticket 1500$. Are you continue?");
alert(Ticket);

var Caution = prompt("Caution!At the moment you have 3500$.Are you continue?");
alert(Caution);

var Account = prompt("The cost of the hotel 1000$. Are you continue?");
alert(Account);

var Caution = prompt("Caution!At the moment you have 2500$. Are you continue?");
alert(Caution);

var Other = prompt("For museums and other expenses you need 2500$. Are you continue?");
alert(Other);

var allcaution = 5000;

if ((allcaution >= "5000") == (allcaution <= "5000")){
    console.log("Your all money has reached the expenses. At the moment you have 0$. Good luck.");
}else{
    console.log("You can not pay  all expenses! You have to wait a little!");
};
