//Chap # 21-25:

var first = prompt("Enter your first name:");
var last = prompt("Enter the last name:");
alert("Hello" + " " + first + " " + last);


var bestMobile = prompt("Enter your fav mobile name:")
var lenghtOfstring = bestMobile;
var n = lenghtOfstring.length;
alert("Lenght of string is :" + "" + n);

var country = "Pakistan";
var indx = country.indexOf("n");
alert("Index of n in Pakistan is :" + " " + indx);


var text = "Hello World";
var show = text.lastIndexOf("l");
alert("last index of Hello world is :" + "" + show);


var textt = "Pakistani";
var find = textt.charAt(3);
alert("CharAt 3 in pakistani is :" + "" + find);


var firstname = "basit";
var lastname = "khatri";
var join = firstname.concat(lastname);
alert("Hello" + " " + join + " " + "using concat method");



var city1 = "Hyderabad";
var city = city1.replace("Hyder", "Islam");
alert(city);


var message = "Ali and Sami are best friends.They play cricket and football together.";
var replacing = message.replace(/and/g, "&");
alert(replacing);


var value = "472";
document.write("472 and type is" + " " + typeof (value) + "" + "<br>");
var value2 = Number(value);
document.write("472 and type is" + " " + typeof (value2) + "" + "<br>");

var dryfruit = "peanut";
var converted = dryfruit.toUpperCase();
document.write(dryfruit + " " + " to " + " " + converted + "<br>");


var input = prompt("Enter Text to Capitalize:")
document.write('User input: ' + input + '<br>');
var output = input.slice(0, 1).toUpperCase() + input.slice(1,)
document.write('Title case: ' + output + '<br>');


var num = 35.36;
var num2 = num.toString();
var strng = num2.replace(/\./g, "");
document.write(num + " " + "to" + " " + strng + "<br>");




var listofitmes = ["cake", "apple pie", "cookie", "chips", "patties"];
var finding = prompt("ENter the value to be find out in our bakery:");
finding = finding.toLowerCase();
var avaiable = false;
for (var i = 0; i <= listofitmes.length; i++) {
    if (finding === listofitmes[i]) {

        document.write(finding + " " + "is avaiable at index of" + " " + i + "<br>");
        avaiable = true;
        break;
    }
}
if (!avaiable) {
    document.write("Item Not found ! <br>");
}



var reg = /^[A-Za-z]+[A-Za-z0-9]*$/;
var str = prompt('Enter password');
if (str.match(reg)) {
    console.log('ok')
} else {
    console.log('no')
}



var str = prompt("Enter any Thing to find last charater:")
var res = str.charAt(str.length - 1);
document.write(res + "<br>");



var str = "University of Karachi";
var array = str.split("U");
document.write(array);



function countOccurences(string, word) {
    return string.split(word).length - 1;
}
var text = "the quick brown fox jumps over the lazydog.";
var count = countOccurences(text, "the");
document.write("<br>" + "<br>" + text + " " + "The appears" + " " + count + " " + " times." + "<br>");
//CHAPTER 26-30:



var nmbr = 3.45241;
var res = Math.round(nmbr);
document.write(res + "<br>");
document.write(Math.floor(nmbr) + "<br>");
document.write(Math.ceil(nmbr) + "<br>");


var nmbr1 = -2.673;
var res1 = Math.round(nmbr1);
document.write(res1 + "<br>");
document.write(Math.floor(nmbr1) + "<br>");
document.write(Math.ceil(nmbr1) + "<br>");



var abss = -4;
document.write(Math.abs(abss) + "<br>");



var dicevalue = Math.random() * 6;
dicevalue = Math.floor(dicevalue);
document.write("RANDOM DICE VALUE IS:" + "" + dicevalue + "<br>");




var select = prompt("Heads or tails:");
var toss = Math.random() * 2;
toss = Math.floor(toss);

if (toss === 1) {

    document.write("its head <br>");
}
else {
    document.write("its tail <br>");
}



var randnum = Math.random() * 100;
randnum = Math.floor(randnum);
document.write(randnum + " " + "is a random number" + "<br>");


var weight = +prompt("Enter your weight:");
document.write("Your weight is :" + " " + weight + "" + "kg<br>");



var givenum = +prompt("Enter number between 1 to 10 for a game: ");
var secretnum = Math.random() * 10;
secretnum = Math.floor(secretnum);

if (givenum === secretnum) {

    alert("you won the game");
}
else {
    alert("Try agian not a correct number");
}





//CHAP # 31-34


var today=new Date();
document.write(today+"<br>");

var monthNames = ["Jan", "feb", "mar", "apr", "may", "june", "july", "Aug", "Sept", "Oct", "Nov", "Dec"];
var yet = new Date();
var themonth = yet.getMonth();
var nameOfmonth = monthNames[themonth];
document.write(nameOfmonth+"<br>");



var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
document.write(nameOfToday+"<br>");



var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];

if(nameOfToday==="Sun" || nameOfToday==="Sat"){

    document.write("Its Fun day <br>");
}
else
{
 document.write("Not A Fun Day ! <br>");
}


var testing=new Date();
var gettingday=testing.getMonth();

if(gettingday <= 15){
    document.write("first 15 days of month they are ! <br>");
}
else{

    document.write("last 15 days of the month they are");
}



var hours = new Date().getHours();
var hours = (hours+24-2)%24; 
var mid='am';
if(hours==0){ //At 00 hours we need to show 12 am
    hours=12;
    }
    else if(hours>12)
    {
    hours=hours%12;
    mid='pm';
    }
document.write('The time: ' + hours + mid+"<br>");


var doomsday = new Date("Dec 31, 2020");
document.write(doomsday+"<br>");


var current= new Date();
var ramzandate= new Date("Apr 24,2020");
ramzandate=ramzandate.getMonth();
current=current.getMonth();

var days=current-ramzandate;
days=days*31;
document.write(days+"<br>");



var timenow=new Date();
var fiveYearsback=new Date("Dec 31, 2014");

timenow=timenow.getSeconds();
fiveYearsback=fiveYearsback.getSeconds();
document.write(timeSpent);
