
function LoadDetailsOne(){ 
	
	/* info@mokonemediahouse.com  */
    $("#emailFirst").text("bookings@");
	$("#emailSecond").text("mokonemediahouse");	
	$("#emailThird").text(".com");	
  	
	/* +27 72 756 5008  */
	$("#cellFirst").text("+27 72 ");
	$("#cellSecond").text("756 ");	
	$("#cellThird").text("5008");	
};


function CreateNumbersTwo(){
 
var firstNumber = document.getElementById("firstNumber");
var secondNumber = document.getElementById("secondNumber");

var x = Math.floor((Math.random() * 10) + 1);    
var y = Math.floor((Math.random() * 10) + 1);

firstNumber.innerHTML = x;
secondNumber.innerHTML = y;
};